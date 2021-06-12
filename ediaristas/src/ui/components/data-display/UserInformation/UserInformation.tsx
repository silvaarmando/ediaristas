import React from 'react';
import {
  UserInformationContainer,
  AvatarStyled,
  UserName,
  RatingStyled,
  UserDescription,
} from './UserInformation.style';

interface UserInformationProps {
  picture: string;
  name: string;
  rating: number;
  description?: string;
}

const UserInformation: React.FC<UserInformationProps> = ({
  picture,
  name,
  rating,
  description,
}) => {
  return (
    <div>
      <UserInformationContainer>
        <AvatarStyled
          src={picture}
        >
          {name[0]}
        </AvatarStyled>
        <UserName>
          {name}
        </UserName>
        <RatingStyled
          readOnly
          value={rating}
        />
        <UserDescription>
          {description}
        </UserDescription>
      </UserInformationContainer>
    </div>
  );
}

export default UserInformation;