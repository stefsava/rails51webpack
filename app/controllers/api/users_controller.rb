module Api
  class UsersController < ResourcesController
    self.jsonapi_parameters = { only: [:name, :email] }
  end
end
