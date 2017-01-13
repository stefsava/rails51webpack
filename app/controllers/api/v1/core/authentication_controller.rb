class Api::V1::Core::AuthenticationController < ApplicationController

  def authenticate
    render_command AuthenticateUser.call(params[:email], params[:password])
  end

  def render_command(command)
    if command.success?
      user = command.send(:user).slice(:name, :email)
      render json: { user: user, auth_token: command.result }
    else
      render json: { error: command.errors }, status: :unauthorized
    end
  end
end
