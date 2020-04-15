class MosquesController < ApplicationController
  before_action :set_host_for_local_storage

  def index
    mosques = Mosque.all.map do |m|
      m.attributes.merge({
                             image: url_for(m.image),
                             qr_code: url_for(m.qr_code_image)
                         })
    end

    respond_to do |format|
      format.json { render json: {mosques: mosques}.to_json }
    end
  end

  private

  def set_host_for_local_storage
    ActiveStorage::Current.host = request.base_url if Rails.application.config.active_storage.service == :local
  end
end
