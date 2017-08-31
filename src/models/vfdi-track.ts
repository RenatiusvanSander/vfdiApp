/*
This model is oriented at http://localhost:3000/api/vfdi/vfdi/all
*/
export interface VfdiTrack {
  id: number;
  img: string;
  fileSize: number;
  description: string;
  realeaseDate: string;
  changeData: string;
  downloadUri: string;
  genre: string;
  rating: number;
  createdAt: string;
  updatedAt: string;
}
