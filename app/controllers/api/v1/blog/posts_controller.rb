class Api::V1::Blog::PostsController < Api::ResourcesController
  self.jsonapi_parameters = { only: [:name, :url] }
end
