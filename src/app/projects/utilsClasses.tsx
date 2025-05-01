export class DialogData {
  mainImage: string;
  upperMinorImage: string;
  bottomMinorImage: string;
  videoSrc: string;
  firstText: string;
  secondText: string;
  thirdText: string;
  constructor(mainImage: string, upperMinorImage: string, bottomMinorImage: string, videoSrc: string, firstText: string, secondText: string, thirdText: string) {
    this.mainImage = mainImage;
    this.upperMinorImage = upperMinorImage;
    this.bottomMinorImage = bottomMinorImage;
    this.videoSrc = videoSrc;
    this.firstText = firstText;
    this.secondText = secondText;
    this.thirdText = thirdText;
  }
}