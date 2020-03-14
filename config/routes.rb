Rails.application.routes.draw do
  devise_for :admin_users, path: 'admin_users'

  root 'landing_page#index'
  resource 'mosques', only: [:index, :show]
end
