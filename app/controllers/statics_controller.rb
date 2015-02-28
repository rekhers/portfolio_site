class StaticsController < ApplicationController
  respond_to :html, :json
  
  def index 
      
  end
  
  def load
    $data = File.read("app/public/tx-counties.geojson")
      render :json => $data
  end
  
end