import styled from "styled-components";
import { Button } from "../../../../components/Button";
import { theme } from "../../../../styles/Themes";
import { WorkProjectType } from "../useWorks";
import { useCallback } from "react";



type WorkProps = WorkProjectType & {
  
}

export const Work = ({
  title,
  description,
  linkCode,
  linkDemo,
  photo,
 
}: WorkProps) => {

const GitHubRedirectButton = useCallback(()=>{
  window.location.href = 'https://tabolo1000.github.io/todolists/';
},[])

  return (
    <MainWork>
      <WorkImageWrapper>
        <Image src={photo} alt={title} />
        <Button onClick={GitHubRedirectButton}>Click</Button>
      </WorkImageWrapper>
      <BlockInformation>
        <Title>{title}</Title>
        <Text>{description}</Text>
        <Link href={linkCode}>{`code ${title} /`}</Link>
        <Link href={linkDemo}>{` demo ${title} `}</Link>
      </BlockInformation>
    </MainWork>
  );
};



const BlockInformation = styled.div`
 padding: 20px 
`

const MainWork = styled.div`
  max-width: 540px;
  background-color: #00b3ff3a;
  width: 100%
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

const Title = styled.h3`
  text-transform: capitalize;
`;

const Text = styled.p`
  padding: 14px 0 10px; 
`;

const Link = styled.a``;

const WorkImageWrapper = styled.div`
  position: relative;
  
  ${Button} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  };

  &::before{
    content: "";
    display: inline-block;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;

  }

  &:hover{
    &::before{
      backdrop-filter: blur(8px);   
    }
    
  ${Button}{
    opacity: 1; 
  }
  }

  @media ${theme.tablet} {
    ${Button}{
      opacity: 1;    
    }
    &::before{
      backdrop-filter: blur(8px);
    }
  }
`