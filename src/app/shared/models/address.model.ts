export interface Address {
    address_components: AddressComponent[]
    adr_address: string
    formatted_address: string
    geometry: Geometry
    icon: string
    icon_background_color: string
    icon_mask_base_uri: string
    name: string
    photos: Photo[]
    place_id: string
    reference: string
    types: string[]
    url: string
    utc_offset: number
    vicinity: string
    html_attributions: any[]
    utc_offset_minutes: number
  }
  
  export interface AddressComponent {
    long_name: string
    short_name: string
    types: string[]
  }
  
  export interface Geometry {
    location: Location
    viewport: Viewport
  }
  
  export interface Location {
    lat: number
    lng: number
  }
  
  export interface Viewport {
    south: number
    west: number
    north: number
    east: number
  }
  
  export interface Photo {
    height: number
    html_attributions: string[]
    width: number
  }
  