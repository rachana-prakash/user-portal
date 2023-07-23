import { Image } from "@chakra-ui/react";

interface Props {
  src: string;
  size: string;
}
const ProfilePhoto = ({ src, size }: Props) => {
  return (
    <Image boxSize={size} borderRadius="full" objectFit="cover" src={src} />
  );
};

export default ProfilePhoto;
