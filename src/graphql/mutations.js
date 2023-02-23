/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAuditionPostModel = /* GraphQL */ `
  mutation CreateAuditionPostModel(
    $input: CreateAuditionPostModelInput!
    $condition: ModelAuditionPostModelConditionInput
  ) {
    createAuditionPostModel(input: $input, condition: $condition) {
      id
      awsID
      type
      username
      title
      contents
      image
      createdAt
      startAt
      endAt
      category
      group
      work_title
      director
      role
      shootStartAt
      times
      rewardStart
      rewardEnd
      howmany
      gender
      manager
      phone
      email
      auditionEndAt
      ageStart
      ageEnd
      shootEndAt
      applyForm
      deletedAt
      aboutCharacter
      parent
      children
      views
      roles
      files
      images
      region
      applyWay
      wysiwyg
      folder
      apcFolder
      apcFolders
      fileJsons
      applyNum
      filePrivate
      passList
      applyOnlyOne
      showProgress
      rewardNego
      password
      updatedAt
    }
  }
`;
export const updateAuditionPostModel = /* GraphQL */ `
  mutation UpdateAuditionPostModel(
    $input: UpdateAuditionPostModelInput!
    $condition: ModelAuditionPostModelConditionInput
  ) {
    updateAuditionPostModel(input: $input, condition: $condition) {
      id
      awsID
      type
      username
      title
      contents
      image
      createdAt
      startAt
      endAt
      category
      group
      work_title
      director
      role
      shootStartAt
      times
      rewardStart
      rewardEnd
      howmany
      gender
      manager
      phone
      email
      auditionEndAt
      ageStart
      ageEnd
      shootEndAt
      applyForm
      deletedAt
      aboutCharacter
      parent
      children
      views
      roles
      files
      images
      region
      applyWay
      wysiwyg
      folder
      apcFolder
      apcFolders
      fileJsons
      applyNum
      filePrivate
      passList
      applyOnlyOne
      showProgress
      rewardNego
      password
      updatedAt
    }
  }
`;
export const deleteAuditionPostModel = /* GraphQL */ `
  mutation DeleteAuditionPostModel(
    $input: DeleteAuditionPostModelInput!
    $condition: ModelAuditionPostModelConditionInput
  ) {
    deleteAuditionPostModel(input: $input, condition: $condition) {
      id
      awsID
      type
      username
      title
      contents
      image
      createdAt
      startAt
      endAt
      category
      group
      work_title
      director
      role
      shootStartAt
      times
      rewardStart
      rewardEnd
      howmany
      gender
      manager
      phone
      email
      auditionEndAt
      ageStart
      ageEnd
      shootEndAt
      applyForm
      deletedAt
      aboutCharacter
      parent
      children
      views
      roles
      files
      images
      region
      applyWay
      wysiwyg
      folder
      apcFolder
      apcFolders
      fileJsons
      applyNum
      filePrivate
      passList
      applyOnlyOne
      showProgress
      rewardNego
      password
      updatedAt
    }
  }
`;
export const createActorProfile = /* GraphQL */ `
  mutation CreateActorProfile(
    $input: CreateActorProfileInput!
    $condition: ModelActorProfileConditionInput
  ) {
    createActorProfile(input: $input, condition: $condition) {
      id
      awsID
      createdAt
      updatedAt
      deletedAt
      type
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
      careers
      careerJsons
      careerStat
      insta
      youtube
      homepage
      aboutMe
      pptProfile
      pdfProfile
      imgProfiles
      youtubeProfiles
      moreProfileVideos
      backgroundColor
      textColor
      videos
      profileVideos
      profileVideoJsons
      engName
      education
      private
      views
      numOfCommercialFilmCareers
      numOfCommercialDramaCareers
      intro
      imageKeywords
      disableImageKeyword
      agency
      hasAgency
      namu
      accessScope
      companyId
      numOfAllCareers
      numOfCommercialFilmAll
      numOfCommercialFilmLead
      numOfCommercialFilmSupport
      numOfCommercialFilmMinor
      numOfIndeFilmAll
      numOfIndeFilmLead
      numOfIndeFilmSupport
      numOfIndeFilmMinor
      numOfTvDramaAll
      numOfTvDramaLead
      numOfTvDramaSupport
      numOfTvDramaMinor
      profileUpdatedAt
      likeUsernameList
      likeNum
      score
    }
  }
`;
export const updateActorProfile = /* GraphQL */ `
  mutation UpdateActorProfile(
    $input: UpdateActorProfileInput!
    $condition: ModelActorProfileConditionInput
  ) {
    updateActorProfile(input: $input, condition: $condition) {
      id
      awsID
      createdAt
      updatedAt
      deletedAt
      type
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
      careers
      careerJsons
      careerStat
      insta
      youtube
      homepage
      aboutMe
      pptProfile
      pdfProfile
      imgProfiles
      youtubeProfiles
      moreProfileVideos
      backgroundColor
      textColor
      videos
      profileVideos
      profileVideoJsons
      engName
      education
      private
      views
      numOfCommercialFilmCareers
      numOfCommercialDramaCareers
      intro
      imageKeywords
      disableImageKeyword
      agency
      hasAgency
      namu
      accessScope
      companyId
      numOfAllCareers
      numOfCommercialFilmAll
      numOfCommercialFilmLead
      numOfCommercialFilmSupport
      numOfCommercialFilmMinor
      numOfIndeFilmAll
      numOfIndeFilmLead
      numOfIndeFilmSupport
      numOfIndeFilmMinor
      numOfTvDramaAll
      numOfTvDramaLead
      numOfTvDramaSupport
      numOfTvDramaMinor
      profileUpdatedAt
      likeUsernameList
      likeNum
      score
    }
  }
`;
export const deleteActorProfile = /* GraphQL */ `
  mutation DeleteActorProfile(
    $input: DeleteActorProfileInput!
    $condition: ModelActorProfileConditionInput
  ) {
    deleteActorProfile(input: $input, condition: $condition) {
      id
      awsID
      createdAt
      updatedAt
      deletedAt
      type
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
      careers
      careerJsons
      careerStat
      insta
      youtube
      homepage
      aboutMe
      pptProfile
      pdfProfile
      imgProfiles
      youtubeProfiles
      moreProfileVideos
      backgroundColor
      textColor
      videos
      profileVideos
      profileVideoJsons
      engName
      education
      private
      views
      numOfCommercialFilmCareers
      numOfCommercialDramaCareers
      intro
      imageKeywords
      disableImageKeyword
      agency
      hasAgency
      namu
      accessScope
      companyId
      numOfAllCareers
      numOfCommercialFilmAll
      numOfCommercialFilmLead
      numOfCommercialFilmSupport
      numOfCommercialFilmMinor
      numOfIndeFilmAll
      numOfIndeFilmLead
      numOfIndeFilmSupport
      numOfIndeFilmMinor
      numOfTvDramaAll
      numOfTvDramaLead
      numOfTvDramaSupport
      numOfTvDramaMinor
      profileUpdatedAt
      likeUsernameList
      likeNum
      score
    }
  }
`;
export const createActorCareer = /* GraphQL */ `
  mutation CreateActorCareer(
    $input: CreateActorCareerInput!
    $condition: ModelActorCareerConditionInput
  ) {
    createActorCareer(input: $input, condition: $condition) {
      id
      awsID
      type
      profileID
      username
      year
      category
      title
      role
      images
      videoLinks
      videos
      roleGrade
      createdAt
      updatedAt
    }
  }
`;
export const updateActorCareer = /* GraphQL */ `
  mutation UpdateActorCareer(
    $input: UpdateActorCareerInput!
    $condition: ModelActorCareerConditionInput
  ) {
    updateActorCareer(input: $input, condition: $condition) {
      id
      awsID
      type
      profileID
      username
      year
      category
      title
      role
      images
      videoLinks
      videos
      roleGrade
      createdAt
      updatedAt
    }
  }
`;
export const deleteActorCareer = /* GraphQL */ `
  mutation DeleteActorCareer(
    $input: DeleteActorCareerInput!
    $condition: ModelActorCareerConditionInput
  ) {
    deleteActorCareer(input: $input, condition: $condition) {
      id
      awsID
      type
      profileID
      username
      year
      category
      title
      role
      images
      videoLinks
      videos
      roleGrade
      createdAt
      updatedAt
    }
  }
`;
export const createProfileVideo = /* GraphQL */ `
  mutation CreateProfileVideo(
    $input: CreateProfileVideoInput!
    $condition: ModelprofileVideoConditionInput
  ) {
    createProfileVideo(input: $input, condition: $condition) {
      id
      profileID
      type
      awsID
      username
      video
      title
      description
      filename
      originalPath
      originalFilename
      createdAt
      updatedAt
    }
  }
`;
export const updateProfileVideo = /* GraphQL */ `
  mutation UpdateProfileVideo(
    $input: UpdateProfileVideoInput!
    $condition: ModelprofileVideoConditionInput
  ) {
    updateProfileVideo(input: $input, condition: $condition) {
      id
      profileID
      type
      awsID
      username
      video
      title
      description
      filename
      originalPath
      originalFilename
      createdAt
      updatedAt
    }
  }
`;
export const deleteProfileVideo = /* GraphQL */ `
  mutation DeleteProfileVideo(
    $input: DeleteProfileVideoInput!
    $condition: ModelprofileVideoConditionInput
  ) {
    deleteProfileVideo(input: $input, condition: $condition) {
      id
      profileID
      type
      awsID
      username
      video
      title
      description
      filename
      originalPath
      originalFilename
      createdAt
      updatedAt
    }
  }
`;
export const createUserModel = /* GraphQL */ `
  mutation CreateUserModel(
    $input: CreateUserModelInput!
    $condition: ModelUserModelConditionInput
  ) {
    createUserModel(input: $input, condition: $condition) {
      id
      awsID
      type
      userTypes
      username
      profileImg
      nickname
      email
      phone
      actorProfiles
      actorProfileID
      job
      tier
      auditionPosts
      appliedRoles
      appliedRolesPlfil
      appliedAuditionsPlfil
      appliedRolesEmail
      auditionLikes
      profileLikes
      boardPostLikes
      boardPosts
      likes
      deletedAt
      pdfProfile
      agree
      profileTourCoupon
      permissionGroupId
      permissionGroup {
        id
        permissionGroupName
        permissionList
        createdAt
        updatedAt
        deletedAt
      }
      events
      bookMarkedPostIdList
      castingListIds
      couponStamp
      recommender
      createdAt
      updatedAt
    }
  }
`;
export const updateUserModel = /* GraphQL */ `
  mutation UpdateUserModel(
    $input: UpdateUserModelInput!
    $condition: ModelUserModelConditionInput
  ) {
    updateUserModel(input: $input, condition: $condition) {
      id
      awsID
      type
      userTypes
      username
      profileImg
      nickname
      email
      phone
      actorProfiles
      actorProfileID
      job
      tier
      auditionPosts
      appliedRoles
      appliedRolesPlfil
      appliedAuditionsPlfil
      appliedRolesEmail
      auditionLikes
      profileLikes
      boardPostLikes
      boardPosts
      likes
      deletedAt
      pdfProfile
      agree
      profileTourCoupon
      permissionGroupId
      permissionGroup {
        id
        permissionGroupName
        permissionList
        createdAt
        updatedAt
        deletedAt
      }
      events
      bookMarkedPostIdList
      castingListIds
      couponStamp
      recommender
      createdAt
      updatedAt
    }
  }
`;
export const deleteUserModel = /* GraphQL */ `
  mutation DeleteUserModel(
    $input: DeleteUserModelInput!
    $condition: ModelUserModelConditionInput
  ) {
    deleteUserModel(input: $input, condition: $condition) {
      id
      awsID
      type
      userTypes
      username
      profileImg
      nickname
      email
      phone
      actorProfiles
      actorProfileID
      job
      tier
      auditionPosts
      appliedRoles
      appliedRolesPlfil
      appliedAuditionsPlfil
      appliedRolesEmail
      auditionLikes
      profileLikes
      boardPostLikes
      boardPosts
      likes
      deletedAt
      pdfProfile
      agree
      profileTourCoupon
      permissionGroupId
      permissionGroup {
        id
        permissionGroupName
        permissionList
        createdAt
        updatedAt
        deletedAt
      }
      events
      bookMarkedPostIdList
      castingListIds
      couponStamp
      recommender
      createdAt
      updatedAt
    }
  }
`;
export const createAuditionApplication = /* GraphQL */ `
  mutation CreateAuditionApplication(
    $input: CreateAuditionApplicationInput!
    $condition: ModelAuditionApplicationConditionInput
  ) {
    createAuditionApplication(input: $input, condition: $condition) {
      id
      type
      applicantAwsID
      applicantUsername
      applicantProfileID
      auditionID
      createdAt
      updatedAt
    }
  }
`;
export const updateAuditionApplication = /* GraphQL */ `
  mutation UpdateAuditionApplication(
    $input: UpdateAuditionApplicationInput!
    $condition: ModelAuditionApplicationConditionInput
  ) {
    updateAuditionApplication(input: $input, condition: $condition) {
      id
      type
      applicantAwsID
      applicantUsername
      applicantProfileID
      auditionID
      createdAt
      updatedAt
    }
  }
`;
export const deleteAuditionApplication = /* GraphQL */ `
  mutation DeleteAuditionApplication(
    $input: DeleteAuditionApplicationInput!
    $condition: ModelAuditionApplicationConditionInput
  ) {
    deleteAuditionApplication(input: $input, condition: $condition) {
      id
      type
      applicantAwsID
      applicantUsername
      applicantProfileID
      auditionID
      createdAt
      updatedAt
    }
  }
`;
export const createEmailApplication = /* GraphQL */ `
  mutation CreateEmailApplication(
    $input: CreateEmailApplicationInput!
    $condition: ModelEmailApplicationConditionInput
  ) {
    createEmailApplication(input: $input, condition: $condition) {
      id
      type
      applicantAwsID
      applicantUsername
      applicantProfileID
      auditionID
      roleID
      group
      createdAt
      updatedAt
    }
  }
`;
export const updateEmailApplication = /* GraphQL */ `
  mutation UpdateEmailApplication(
    $input: UpdateEmailApplicationInput!
    $condition: ModelEmailApplicationConditionInput
  ) {
    updateEmailApplication(input: $input, condition: $condition) {
      id
      type
      applicantAwsID
      applicantUsername
      applicantProfileID
      auditionID
      roleID
      group
      createdAt
      updatedAt
    }
  }
`;
export const deleteEmailApplication = /* GraphQL */ `
  mutation DeleteEmailApplication(
    $input: DeleteEmailApplicationInput!
    $condition: ModelEmailApplicationConditionInput
  ) {
    deleteEmailApplication(input: $input, condition: $condition) {
      id
      type
      applicantAwsID
      applicantUsername
      applicantProfileID
      auditionID
      roleID
      group
      createdAt
      updatedAt
    }
  }
`;
export const createPlfilApplication = /* GraphQL */ `
  mutation CreatePlfilApplication(
    $input: CreatePlfilApplicationInput!
    $condition: ModelPlfilApplicationConditionInput
  ) {
    createPlfilApplication(input: $input, condition: $condition) {
      id
      type
      createdAt
      applicantAwsID
      applicantUsername
      applicantProfileID
      auditionID
      roleID
      group
      updatedAt
    }
  }
`;
export const updatePlfilApplication = /* GraphQL */ `
  mutation UpdatePlfilApplication(
    $input: UpdatePlfilApplicationInput!
    $condition: ModelPlfilApplicationConditionInput
  ) {
    updatePlfilApplication(input: $input, condition: $condition) {
      id
      type
      createdAt
      applicantAwsID
      applicantUsername
      applicantProfileID
      auditionID
      roleID
      group
      updatedAt
    }
  }
`;
export const deletePlfilApplication = /* GraphQL */ `
  mutation DeletePlfilApplication(
    $input: DeletePlfilApplicationInput!
    $condition: ModelPlfilApplicationConditionInput
  ) {
    deletePlfilApplication(input: $input, condition: $condition) {
      id
      type
      createdAt
      applicantAwsID
      applicantUsername
      applicantProfileID
      auditionID
      roleID
      group
      updatedAt
    }
  }
`;
export const createBoardPostModel = /* GraphQL */ `
  mutation CreateBoardPostModel(
    $input: CreateBoardPostModelInput!
    $condition: ModelBoardPostModelConditionInput
  ) {
    createBoardPostModel(input: $input, condition: $condition) {
      id
      awsID
      type
      username
      nickname
      title
      contents
      image
      createdAt
      category
      subCategory
      head
      deletedAt
      views
      wysiwyg
      imagePaths
      videoPaths
      likeNum
      likeUsernameList
      bookMarkNum
      bookMarkUsernameList
      commentsNum
      showAtLandingPage
      showAtProfileTourPage
      startAt
      endAt
      additionalInfo
      updatedAt
    }
  }
`;
export const updateBoardPostModel = /* GraphQL */ `
  mutation UpdateBoardPostModel(
    $input: UpdateBoardPostModelInput!
    $condition: ModelBoardPostModelConditionInput
  ) {
    updateBoardPostModel(input: $input, condition: $condition) {
      id
      awsID
      type
      username
      nickname
      title
      contents
      image
      createdAt
      category
      subCategory
      head
      deletedAt
      views
      wysiwyg
      imagePaths
      videoPaths
      likeNum
      likeUsernameList
      bookMarkNum
      bookMarkUsernameList
      commentsNum
      showAtLandingPage
      showAtProfileTourPage
      startAt
      endAt
      additionalInfo
      updatedAt
    }
  }
`;
export const deleteBoardPostModel = /* GraphQL */ `
  mutation DeleteBoardPostModel(
    $input: DeleteBoardPostModelInput!
    $condition: ModelBoardPostModelConditionInput
  ) {
    deleteBoardPostModel(input: $input, condition: $condition) {
      id
      awsID
      type
      username
      nickname
      title
      contents
      image
      createdAt
      category
      subCategory
      head
      deletedAt
      views
      wysiwyg
      imagePaths
      videoPaths
      likeNum
      likeUsernameList
      bookMarkNum
      bookMarkUsernameList
      commentsNum
      showAtLandingPage
      showAtProfileTourPage
      startAt
      endAt
      additionalInfo
      updatedAt
    }
  }
`;
export const createBoardCommentModel = /* GraphQL */ `
  mutation CreateBoardCommentModel(
    $input: CreateBoardCommentModelInput!
    $condition: ModelBoardCommentModelConditionInput
  ) {
    createBoardCommentModel(input: $input, condition: $condition) {
      id
      awsID
      type
      postID
      parentId
      parentNickname
      username
      nickname
      comment
      private
      isVisitor
      password
      createdAt
      category
      deletedAt
      admin
      likeNum
      likeUsernameList
      updatedAt
    }
  }
`;
export const updateBoardCommentModel = /* GraphQL */ `
  mutation UpdateBoardCommentModel(
    $input: UpdateBoardCommentModelInput!
    $condition: ModelBoardCommentModelConditionInput
  ) {
    updateBoardCommentModel(input: $input, condition: $condition) {
      id
      awsID
      type
      postID
      parentId
      parentNickname
      username
      nickname
      comment
      private
      isVisitor
      password
      createdAt
      category
      deletedAt
      admin
      likeNum
      likeUsernameList
      updatedAt
    }
  }
`;
export const deleteBoardCommentModel = /* GraphQL */ `
  mutation DeleteBoardCommentModel(
    $input: DeleteBoardCommentModelInput!
    $condition: ModelBoardCommentModelConditionInput
  ) {
    deleteBoardCommentModel(input: $input, condition: $condition) {
      id
      awsID
      type
      postID
      parentId
      parentNickname
      username
      nickname
      comment
      private
      isVisitor
      password
      createdAt
      category
      deletedAt
      admin
      likeNum
      likeUsernameList
      updatedAt
    }
  }
`;
export const createSelectActorImageModel = /* GraphQL */ `
  mutation CreateSelectActorImageModel(
    $input: CreateSelectActorImageModelInput!
    $condition: ModelSelectActorImageModelConditionInput
  ) {
    createSelectActorImageModel(input: $input, condition: $condition) {
      id
      awsID
      type
      profileID
      username
      createdAt
      category
      deletedAt
      keyword
      keywords
      times
      allImagesNum
      checkedImagesNum
      ip
      updatedAt
    }
  }
`;
export const updateSelectActorImageModel = /* GraphQL */ `
  mutation UpdateSelectActorImageModel(
    $input: UpdateSelectActorImageModelInput!
    $condition: ModelSelectActorImageModelConditionInput
  ) {
    updateSelectActorImageModel(input: $input, condition: $condition) {
      id
      awsID
      type
      profileID
      username
      createdAt
      category
      deletedAt
      keyword
      keywords
      times
      allImagesNum
      checkedImagesNum
      ip
      updatedAt
    }
  }
`;
export const deleteSelectActorImageModel = /* GraphQL */ `
  mutation DeleteSelectActorImageModel(
    $input: DeleteSelectActorImageModelInput!
    $condition: ModelSelectActorImageModelConditionInput
  ) {
    deleteSelectActorImageModel(input: $input, condition: $condition) {
      id
      awsID
      type
      profileID
      username
      createdAt
      category
      deletedAt
      keyword
      keywords
      times
      allImagesNum
      checkedImagesNum
      ip
      updatedAt
    }
  }
`;
export const createAuditionRoleModel = /* GraphQL */ `
  mutation CreateAuditionRoleModel(
    $input: CreateAuditionRoleModelInput!
    $condition: ModelAuditionRoleModelConditionInput
  ) {
    createAuditionRoleModel(input: $input, condition: $condition) {
      id
      awsID
      type
      profileID
      username
      auditionID
      createdAt
      deletedAt
      roleGrade
      gender
      roleName
      applyAgeStart
      applyAgeEnd
      roleDescription
      roleRemark
      emailApplyForm
      applicants
      roleAge
      applyNum
      updatedAt
    }
  }
`;
export const updateAuditionRoleModel = /* GraphQL */ `
  mutation UpdateAuditionRoleModel(
    $input: UpdateAuditionRoleModelInput!
    $condition: ModelAuditionRoleModelConditionInput
  ) {
    updateAuditionRoleModel(input: $input, condition: $condition) {
      id
      awsID
      type
      profileID
      username
      auditionID
      createdAt
      deletedAt
      roleGrade
      gender
      roleName
      applyAgeStart
      applyAgeEnd
      roleDescription
      roleRemark
      emailApplyForm
      applicants
      roleAge
      applyNum
      updatedAt
    }
  }
`;
export const deleteAuditionRoleModel = /* GraphQL */ `
  mutation DeleteAuditionRoleModel(
    $input: DeleteAuditionRoleModelInput!
    $condition: ModelAuditionRoleModelConditionInput
  ) {
    deleteAuditionRoleModel(input: $input, condition: $condition) {
      id
      awsID
      type
      profileID
      username
      auditionID
      createdAt
      deletedAt
      roleGrade
      gender
      roleName
      applyAgeStart
      applyAgeEnd
      roleDescription
      roleRemark
      emailApplyForm
      applicants
      roleAge
      applyNum
      updatedAt
    }
  }
`;
export const createPlfilStatus = /* GraphQL */ `
  mutation CreatePlfilStatus(
    $input: CreatePlfilStatusInput!
    $condition: ModelPlfilStatusConditionInput
  ) {
    createPlfilStatus(input: $input, condition: $condition) {
      id
      num
      statusJson
      createdAt
      updatedAt
    }
  }
`;
export const updatePlfilStatus = /* GraphQL */ `
  mutation UpdatePlfilStatus(
    $input: UpdatePlfilStatusInput!
    $condition: ModelPlfilStatusConditionInput
  ) {
    updatePlfilStatus(input: $input, condition: $condition) {
      id
      num
      statusJson
      createdAt
      updatedAt
    }
  }
`;
export const deletePlfilStatus = /* GraphQL */ `
  mutation DeletePlfilStatus(
    $input: DeletePlfilStatusInput!
    $condition: ModelPlfilStatusConditionInput
  ) {
    deletePlfilStatus(input: $input, condition: $condition) {
      id
      num
      statusJson
      createdAt
      updatedAt
    }
  }
`;
export const createProfileTourModel = /* GraphQL */ `
  mutation CreateProfileTourModel(
    $input: CreateProfileTourModelInput!
    $condition: ModelProfileTourModelConditionInput
  ) {
    createProfileTourModel(input: $input, condition: $condition) {
      id
      awsID
      type
      username
      state
      category
      company
      workTitle
      location
      locationDetail
      note
      acceptApply
      mainActor
      director
      detail
      createdAt
      updatedAt
      closedAt
      deletedAt
      tourGroup
      new
      auditionId
      lat
      lng
    }
  }
`;
export const updateProfileTourModel = /* GraphQL */ `
  mutation UpdateProfileTourModel(
    $input: UpdateProfileTourModelInput!
    $condition: ModelProfileTourModelConditionInput
  ) {
    updateProfileTourModel(input: $input, condition: $condition) {
      id
      awsID
      type
      username
      state
      category
      company
      workTitle
      location
      locationDetail
      note
      acceptApply
      mainActor
      director
      detail
      createdAt
      updatedAt
      closedAt
      deletedAt
      tourGroup
      new
      auditionId
      lat
      lng
    }
  }
`;
export const deleteProfileTourModel = /* GraphQL */ `
  mutation DeleteProfileTourModel(
    $input: DeleteProfileTourModelInput!
    $condition: ModelProfileTourModelConditionInput
  ) {
    deleteProfileTourModel(input: $input, condition: $condition) {
      id
      awsID
      type
      username
      state
      category
      company
      workTitle
      location
      locationDetail
      note
      acceptApply
      mainActor
      director
      detail
      createdAt
      updatedAt
      closedAt
      deletedAt
      tourGroup
      new
      auditionId
      lat
      lng
    }
  }
`;
export const createProfileTourApplicationModel = /* GraphQL */ `
  mutation CreateProfileTourApplicationModel(
    $input: CreateProfileTourApplicationModelInput!
    $condition: ModelProfileTourApplicationModelConditionInput
  ) {
    createProfileTourApplicationModel(input: $input, condition: $condition) {
      id
      type
      username
      profileTourId
      amount
      status
      statusCode
      createdAt
      updatedAt
      deletedAt
      profileTourInfoJson
    }
  }
`;
export const updateProfileTourApplicationModel = /* GraphQL */ `
  mutation UpdateProfileTourApplicationModel(
    $input: UpdateProfileTourApplicationModelInput!
    $condition: ModelProfileTourApplicationModelConditionInput
  ) {
    updateProfileTourApplicationModel(input: $input, condition: $condition) {
      id
      type
      username
      profileTourId
      amount
      status
      statusCode
      createdAt
      updatedAt
      deletedAt
      profileTourInfoJson
    }
  }
`;
export const deleteProfileTourApplicationModel = /* GraphQL */ `
  mutation DeleteProfileTourApplicationModel(
    $input: DeleteProfileTourApplicationModelInput!
    $condition: ModelProfileTourApplicationModelConditionInput
  ) {
    deleteProfileTourApplicationModel(input: $input, condition: $condition) {
      id
      type
      username
      profileTourId
      amount
      status
      statusCode
      createdAt
      updatedAt
      deletedAt
      profileTourInfoJson
    }
  }
`;
export const createOrderModel = /* GraphQL */ `
  mutation CreateOrderModel(
    $input: CreateOrderModelInput!
    $condition: ModelOrderModelConditionInput
  ) {
    createOrderModel(input: $input, condition: $condition) {
      id
      orderHistory
      type
      username
      productJsons
      status
      category
      createdAt
      updatedAt
      deletedAt
      totalAmount
      discountAmount
      paymentAmount
      shipAddress
      shipAddressDetail
      postCode
      recipient
      recipientPhone
      phone
      name
      pay_method
      escrow
      merchant_uid
      amount
      pg
      buyer_name
      buyer_tel
      buyer_email
      imp_uid
      actorName
      actorPdf
      imageJsons
      note
      images
      printImages
      profileTourImages
      usedProfileTourCouponNum
      couponDiscountAmount
      allSelectDiscountAmount
    }
  }
`;
export const updateOrderModel = /* GraphQL */ `
  mutation UpdateOrderModel(
    $input: UpdateOrderModelInput!
    $condition: ModelOrderModelConditionInput
  ) {
    updateOrderModel(input: $input, condition: $condition) {
      id
      orderHistory
      type
      username
      productJsons
      status
      category
      createdAt
      updatedAt
      deletedAt
      totalAmount
      discountAmount
      paymentAmount
      shipAddress
      shipAddressDetail
      postCode
      recipient
      recipientPhone
      phone
      name
      pay_method
      escrow
      merchant_uid
      amount
      pg
      buyer_name
      buyer_tel
      buyer_email
      imp_uid
      actorName
      actorPdf
      imageJsons
      note
      images
      printImages
      profileTourImages
      usedProfileTourCouponNum
      couponDiscountAmount
      allSelectDiscountAmount
    }
  }
`;
export const deleteOrderModel = /* GraphQL */ `
  mutation DeleteOrderModel(
    $input: DeleteOrderModelInput!
    $condition: ModelOrderModelConditionInput
  ) {
    deleteOrderModel(input: $input, condition: $condition) {
      id
      orderHistory
      type
      username
      productJsons
      status
      category
      createdAt
      updatedAt
      deletedAt
      totalAmount
      discountAmount
      paymentAmount
      shipAddress
      shipAddressDetail
      postCode
      recipient
      recipientPhone
      phone
      name
      pay_method
      escrow
      merchant_uid
      amount
      pg
      buyer_name
      buyer_tel
      buyer_email
      imp_uid
      actorName
      actorPdf
      imageJsons
      note
      images
      printImages
      profileTourImages
      usedProfileTourCouponNum
      couponDiscountAmount
      allSelectDiscountAmount
    }
  }
`;
export const createCouponHistory = /* GraphQL */ `
  mutation CreateCouponHistory(
    $input: CreateCouponHistoryInput!
    $condition: ModelCouponHistoryConditionInput
  ) {
    createCouponHistory(input: $input, condition: $condition) {
      id
      type
      username
      adminUsername
      createdAt
      updatedAt
      deletedAt
      addNum
      sum
      content
    }
  }
`;
export const updateCouponHistory = /* GraphQL */ `
  mutation UpdateCouponHistory(
    $input: UpdateCouponHistoryInput!
    $condition: ModelCouponHistoryConditionInput
  ) {
    updateCouponHistory(input: $input, condition: $condition) {
      id
      type
      username
      adminUsername
      createdAt
      updatedAt
      deletedAt
      addNum
      sum
      content
    }
  }
`;
export const deleteCouponHistory = /* GraphQL */ `
  mutation DeleteCouponHistory(
    $input: DeleteCouponHistoryInput!
    $condition: ModelCouponHistoryConditionInput
  ) {
    deleteCouponHistory(input: $input, condition: $condition) {
      id
      type
      username
      adminUsername
      createdAt
      updatedAt
      deletedAt
      addNum
      sum
      content
    }
  }
`;
export const createCompanyModel = /* GraphQL */ `
  mutation CreateCompanyModel(
    $input: CreateCompanyModelInput!
    $condition: ModelCompanyModelConditionInput
  ) {
    createCompanyModel(input: $input, condition: $condition) {
      id
      companyName
      companyTypes
      websiteUrl
      staffs
      clients
      artistProfileIds
      imageJson
      contacts
      description
      createdAt
      updatedAt
      deletedAt
      show
    }
  }
`;
export const updateCompanyModel = /* GraphQL */ `
  mutation UpdateCompanyModel(
    $input: UpdateCompanyModelInput!
    $condition: ModelCompanyModelConditionInput
  ) {
    updateCompanyModel(input: $input, condition: $condition) {
      id
      companyName
      companyTypes
      websiteUrl
      staffs
      clients
      artistProfileIds
      imageJson
      contacts
      description
      createdAt
      updatedAt
      deletedAt
      show
    }
  }
`;
export const deleteCompanyModel = /* GraphQL */ `
  mutation DeleteCompanyModel(
    $input: DeleteCompanyModelInput!
    $condition: ModelCompanyModelConditionInput
  ) {
    deleteCompanyModel(input: $input, condition: $condition) {
      id
      companyName
      companyTypes
      websiteUrl
      staffs
      clients
      artistProfileIds
      imageJson
      contacts
      description
      createdAt
      updatedAt
      deletedAt
      show
    }
  }
`;
export const createPermissionGroupModel = /* GraphQL */ `
  mutation CreatePermissionGroupModel(
    $input: CreatePermissionGroupModelInput!
    $condition: ModelPermissionGroupModelConditionInput
  ) {
    createPermissionGroupModel(input: $input, condition: $condition) {
      id
      permissionGroupName
      permissionList
      createdAt
      updatedAt
      deletedAt
    }
  }
`;
export const updatePermissionGroupModel = /* GraphQL */ `
  mutation UpdatePermissionGroupModel(
    $input: UpdatePermissionGroupModelInput!
    $condition: ModelPermissionGroupModelConditionInput
  ) {
    updatePermissionGroupModel(input: $input, condition: $condition) {
      id
      permissionGroupName
      permissionList
      createdAt
      updatedAt
      deletedAt
    }
  }
`;
export const deletePermissionGroupModel = /* GraphQL */ `
  mutation DeletePermissionGroupModel(
    $input: DeletePermissionGroupModelInput!
    $condition: ModelPermissionGroupModelConditionInput
  ) {
    deletePermissionGroupModel(input: $input, condition: $condition) {
      id
      permissionGroupName
      permissionList
      createdAt
      updatedAt
      deletedAt
    }
  }
`;
export const createDeletedModel = /* GraphQL */ `
  mutation CreateDeletedModel(
    $input: CreateDeletedModelInput!
    $condition: ModelDeletedModelConditionInput
  ) {
    createDeletedModel(input: $input, condition: $condition) {
      id
      data
      deletedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateDeletedModel = /* GraphQL */ `
  mutation UpdateDeletedModel(
    $input: UpdateDeletedModelInput!
    $condition: ModelDeletedModelConditionInput
  ) {
    updateDeletedModel(input: $input, condition: $condition) {
      id
      data
      deletedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteDeletedModel = /* GraphQL */ `
  mutation DeleteDeletedModel(
    $input: DeleteDeletedModelInput!
    $condition: ModelDeletedModelConditionInput
  ) {
    deleteDeletedModel(input: $input, condition: $condition) {
      id
      data
      deletedAt
      createdAt
      updatedAt
    }
  }
`;
export const createCastingListModel = /* GraphQL */ `
  mutation CreateCastingListModel(
    $input: CreateCastingListModelInput!
    $condition: ModelCastingListModelConditionInput
  ) {
    createCastingListModel(input: $input, condition: $condition) {
      id
      type
      title
      owner
      createdAt
      updatedAt
      deletedAt
      itemIds
      profileIds
    }
  }
`;
export const updateCastingListModel = /* GraphQL */ `
  mutation UpdateCastingListModel(
    $input: UpdateCastingListModelInput!
    $condition: ModelCastingListModelConditionInput
  ) {
    updateCastingListModel(input: $input, condition: $condition) {
      id
      type
      title
      owner
      createdAt
      updatedAt
      deletedAt
      itemIds
      profileIds
    }
  }
`;
export const deleteCastingListModel = /* GraphQL */ `
  mutation DeleteCastingListModel(
    $input: DeleteCastingListModelInput!
    $condition: ModelCastingListModelConditionInput
  ) {
    deleteCastingListModel(input: $input, condition: $condition) {
      id
      type
      title
      owner
      createdAt
      updatedAt
      deletedAt
      itemIds
      profileIds
    }
  }
`;
export const createCastingListItem = /* GraphQL */ `
  mutation CreateCastingListItem(
    $input: CreateCastingListItemInput!
    $condition: ModelCastingListItemConditionInput
  ) {
    createCastingListItem(input: $input, condition: $condition) {
      id
      type
      createdAt
      castingListId
      profileId
      casterUsername
      profileOwnerUsername
      group
      updatedAt
    }
  }
`;
export const updateCastingListItem = /* GraphQL */ `
  mutation UpdateCastingListItem(
    $input: UpdateCastingListItemInput!
    $condition: ModelCastingListItemConditionInput
  ) {
    updateCastingListItem(input: $input, condition: $condition) {
      id
      type
      createdAt
      castingListId
      profileId
      casterUsername
      profileOwnerUsername
      group
      updatedAt
    }
  }
`;
export const deleteCastingListItem = /* GraphQL */ `
  mutation DeleteCastingListItem(
    $input: DeleteCastingListItemInput!
    $condition: ModelCastingListItemConditionInput
  ) {
    deleteCastingListItem(input: $input, condition: $condition) {
      id
      type
      createdAt
      castingListId
      profileId
      casterUsername
      profileOwnerUsername
      group
      updatedAt
    }
  }
`;
export const createCouponModel = /* GraphQL */ `
  mutation CreateCouponModel(
    $input: CreateCouponModelInput!
    $condition: ModelCouponModelConditionInput
  ) {
    createCouponModel(input: $input, condition: $condition) {
      id
      type
      createdAt
      updatedAt
      deletedAt
      usedAt
      expiredAt
      value
      issuerId
      userId
      title
      reason
      canOverlap
      userList
    }
  }
`;
export const updateCouponModel = /* GraphQL */ `
  mutation UpdateCouponModel(
    $input: UpdateCouponModelInput!
    $condition: ModelCouponModelConditionInput
  ) {
    updateCouponModel(input: $input, condition: $condition) {
      id
      type
      createdAt
      updatedAt
      deletedAt
      usedAt
      expiredAt
      value
      issuerId
      userId
      title
      reason
      canOverlap
      userList
    }
  }
`;
export const deleteCouponModel = /* GraphQL */ `
  mutation DeleteCouponModel(
    $input: DeleteCouponModelInput!
    $condition: ModelCouponModelConditionInput
  ) {
    deleteCouponModel(input: $input, condition: $condition) {
      id
      type
      createdAt
      updatedAt
      deletedAt
      usedAt
      expiredAt
      value
      issuerId
      userId
      title
      reason
      canOverlap
      userList
    }
  }
`;
