export class DialogData {
  mainImage: string;
  upperMinorImage: string;
  bottomMinorImage: string;
  videoSrc: string;
  firstText: string;
  secondText: string;
  thirdText: string;
  titleText: string;
  constructor(mainImage: string, upperMinorImage: string, bottomMinorImage: string, videoSrc: string, firstText: string, secondText: string, thirdText: string, titleText: string) {
    this.mainImage = mainImage;
    this.upperMinorImage = upperMinorImage;
    this.bottomMinorImage = bottomMinorImage;
    this.videoSrc = videoSrc;
    this.firstText = firstText;
    this.secondText = secondText;
    this.thirdText = thirdText;
    this.titleText = titleText;
  }
}