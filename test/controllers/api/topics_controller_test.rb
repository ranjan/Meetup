require 'test_helper'

class Api::TopicsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_topics_index_url
    assert_response :success
  end

end
