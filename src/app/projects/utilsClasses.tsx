export class DialogData {
  mainImage: string;
  upperMinorImage: string;
  bottomMinorImage: string;
  videoSrc: string;
  constructor(mainImage: string, upperMinorImage: string, bottomMinorImage: string, videoSrc: string) {
    this.mainImage = mainImage;
    this.upperMinorImage = upperMinorImage;
    this.bottomMinorImage = bottomMinorImage;
    this.videoSrc = videoSrc;
  }
}