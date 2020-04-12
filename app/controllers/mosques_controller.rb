class MosquesController < ApplicationController
  def index
    mosques = Mosque.all

    respond_to do |format|
      format.json { render json: {mosques: mosques}.to_json }
    end
  end
end
