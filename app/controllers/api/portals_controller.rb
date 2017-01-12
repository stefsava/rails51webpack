class Api::PortalsController < Api::ResourcesController
  self.jsonapi_parameters = { only: [:name, :url] }
end
