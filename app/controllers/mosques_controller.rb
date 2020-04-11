class MosquesController < ApplicationController
  def index
    mosques = [{
                   name: 'Masjid First',
                   full_address: '1 Masjid Road, Singapore 111111',
                   phone: 64441111,
                   email: 'one@mosque.com',
                   website: 'https://one.mosque.com',
                   description: 'This is the first mosque.'
               },
               {
                   name: 'Masjid Second',
                   full_address: '2 Masjid Road, Singapore 111111',
                   phone: 64441111,
                   email: 'two@mosque.com',
                   website: 'https://two.mosque.com',
                   description: 'This is the second mosque.'
               }]

    render json: {mosques: mosques}.to_json
  end
end
