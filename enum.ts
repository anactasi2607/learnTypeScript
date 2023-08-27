// Enum это вспомогательная сущность, которая позволяяет структурировать код,
// если в нем присутствуют однотипные элементы;
enum MemberShip {
  Simple,
  Standart,
  Premium,
};

const membership = MemberShip.Standart;

enum SocialMedia {
  VK = 'vk',
  FACEBOOK = 'facebook',
  INSTA = 'insta',
};

const media = SocialMedia.INSTA;
console.log(media);


