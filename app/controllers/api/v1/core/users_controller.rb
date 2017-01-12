class Api::V1::Core::UsersController < Api::ResourcesController
  self.jsonapi_parameters = { only: [:name, :email] }
end
