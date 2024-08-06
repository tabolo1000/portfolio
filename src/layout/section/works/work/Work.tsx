import styled from "styled-components";
import { WorkProjectType } from "../Works";

export const Work = ({
  title,
  description,
  linkCode,
  linkDemo,
  photo,
}: WorkProjectType) => {
  return (
    <MainWork>
      <Image src={photo} alt={title} />
      <Title>{title}</Title>
      <Text>{description}</Text>
      <Link href={linkCode}>{`code ${title} /`}</Link>
      <Link href={linkDemo}>{` demo ${title} `}</Link>
    </MainWork>
  );
};

const MainWork = styled.div`
  max-width: 602.01px;
  background-color: #00b3ff3a;
  width: 100%
`;

const Image = styled.img`
  width: 100%;
  height: 452.91px;
  object-fit: cover;
`;

const Title = styled.h3``;

const Text = styled.p``;

const Link = styled.a``;
