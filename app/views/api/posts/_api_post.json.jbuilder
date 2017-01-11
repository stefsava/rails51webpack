json.extract! api_post, :id, :created_at, :updated_at
json.url api_post_url(api_post, format: :json)