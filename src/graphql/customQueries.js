/* eslint-disable */
export const getActorProfileByDate = /* GraphQL */ `
  query GetActorProfileByDate {
    getActorProfileByDate(sortDirection: DESC) {
      items {
        id
        awsID
        createdAt
        username
        gender
        mainProfileImage
        actorName
        birthday
        height
        weight
        email
        phone
        phonePrivate
        moreProfileImages
        specialty
        careers {
          items {
            id
            awsID
            profileID
            username
            year
            category
            title
            role
            images
            videoLinks
            videos
            createdAt
            updatedAt
          }
          nextToken
        }
        insta
        youtube
        homepage
        aboutMe
        pptProfile
        pdfProfile
        youtubeProfiles
        moreProfileVideos
        backgroundColor
        videos
        profileVideos {
          items {
            id
            profileID
            awsID
            username
            video
            title
            description
            createdAt
            updatedAt
          }
          nextToken
        }
        engName
        education
        updatedAt
      }
      nextToken
    }
  }
`;
