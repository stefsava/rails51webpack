class Api::V1::Core::PortalsController < Api::ResourcesController
  self.jsonapi_parameters = { only: [:name, :url] }
end
