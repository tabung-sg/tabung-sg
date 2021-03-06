Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  # Commenting these out for now. But leaving it in here for
  # reference, just in case.
  # devise_for :admin_users, path: 'admin_users', controllers: {
  #   sessions: 'admin_users/sessions',
  #   registrations: 'admin_users/registrations',
  #   passwords: 'admin_users/passwords',
  #   confirmations: 'admin_users/confirmations',
  #   unlocks: 'admin_users/unlocks'
  # }

  devise_for :users, path: 'users', controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations',
    passwords: 'users/passwords',
    confirmations: 'users/confirmations',
    unlocks: 'users/unlocks'
  }

  root 'landing_page#index'

  get 'mosques' => 'mosques#index'

  get "/auth/google/callback"  => "authentications#google"
end
