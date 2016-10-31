Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :new, :show]
    resource :session, only: [:create, :new, :destroy]
    resources :benches, only: [:index, :create]
  end

  root "static_pages#root"
end
