require 'test_helper'

class MosquesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get mosques_index_url
    assert_response :success
  end

  test "should get show" do
    get mosques_show_url
    assert_response :success
  end

end
