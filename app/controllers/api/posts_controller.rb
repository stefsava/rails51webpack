class Api::PostsController < ApplicationController
  before_action :set_api_post, only: [:show, :update, :destroy]

  # GET /api/posts
  # GET /api/posts.json
  def index
    @api_posts = Post.all
  end

  # GET /api/posts/1
  # GET /api/posts/1.json
  def show
  end

  # POST /api/posts
  # POST /api/posts.json
  def create
    @api_post = Post.new(api_post_params)

    if @api_post.save
      render :show, status: :created, location: @api_post
    else
      render json: @api_post.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/posts/1
  # PATCH/PUT /api/posts/1.json
  def update
    if @api_post.update(api_post_params)
      render :show, status: :ok, location: @api_post
    else
      render json: @api_post.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/posts/1
  # DELETE /api/posts/1.json
  def destroy
    @api_post.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_api_post
      @api_post = Post.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def api_post_params
      params.fetch(:api_post, {})
    end
end
