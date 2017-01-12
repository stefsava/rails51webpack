json.extract! api_post, :title
json.url api_post_url(api_post, format: :json)
json._id api_post.id
json.categories [] #api_post.categories.split

