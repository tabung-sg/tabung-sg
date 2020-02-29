Rails.application.routes.draw do
  root 'landing_page#index'
  resource 'mosques', only: [:index, :show]
end
