import Image from "next/image";

interface ArtistCardProps {
  name: string;
  followers: number;
  image: string;
}

const ArtistCard = ({ name, followers, image }: ArtistCardProps) => {
  return (
    <div className="flex flex-col gap-6 p-6 rounded-3xl text-left hover:bg-primary hover:text-primary-foreground">
      <Image
        src={image}
        alt={name}
        className="rounded-xl w-full h-60 object-cover"
      />
      <h3 className="text-4xl font-semibold">{name}</h3>
      <p className="text-base font-semibold">
        Followers: {followers.toLocaleString()}
      </p>
    </div>
  );
};

export default ArtistCard;
