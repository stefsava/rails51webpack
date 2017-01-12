module Api
  class ResourcesController < ActionController::API
    before_action :authenticate_request
    before_action :set_resource, only: [:show, :update, :destroy]
    before_action :check_header

    attr_reader :current_user

    def model_class
      controller_name.classify.constantize
    end

    def index
      collection = model_class.all
      render json: collection
    end

    def show
      render json: @resource
    end

    def create
      resource = model_class.new(resource_params)

      if resource.save
        render json: resource, status: :created, location: resource
      else
        render json: resource.errors, status: :unprocessable_entity
      end
    end

    def update
      if @resource.update(resource_params)
        render json: @resource
      else
        render json: @resource.errors, status: :unprocessable_entity
      end
    end

    def destroy
      @resource.destroy
    end

    @jsonapi_parameters = {}
    class << self
      attr_accessor :jsonapi_parameters
    end

    private

    def authenticate_request
      @current_user = AuthorizeApiRequest.call(request.headers).result
      render json: { error: 'Not Authorized' }, status: 401 unless @current_user
    end

    def check_header
      head 406 && return if
        %w(POST PUT PATCH').include?(request.method) &&
        request.content_type != 'application/vnd.api+json'
    end

    def validate_type
      return true if params['data'].andand['type'] == params[:controller]
      head 409 && return
    end

    def render_error(resource, status)
      render json: resource, status: status, adapter: :json_api,
             serializer: ActiveModel::Serializer::ErrorSerializer
    end

    # Use callbacks to share common setup or constraints between actions.
    def set_resource
      validate_type
      begin
        @resource = model_class.find(params[:id])
      rescue ActiveRecord::RecordNotFound
        resource = model_class.new
        resource.errors.add(:id, "Wrong ID provided")
        render_error(user, 404) and return
      end
    end

    def resource_params
      ActiveModelSerializers::Deserialization.jsonapi_parse(
        params,
        self.class.jsonapi_parameters
      )
    end
  end
end
