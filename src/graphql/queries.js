/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAuditionPostModel = /* GraphQL */ `
  query GetAuditionPostModel($id: ID!) {
    getAuditionPostModel(id: $id) {
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
export const listAuditionPostModels = /* GraphQL */ `
  query ListAuditionPostModels(
    $filter: ModelAuditionPostModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAuditionPostModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getActorProfile = /* GraphQL */ `
  query GetActorProfile($id: ID!) {
    getActorProfile(id: $id) {
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
export const listActorProfiles = /* GraphQL */ `
  query ListActorProfiles(
    $filter: ModelActorProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listActorProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getActorCareer = /* GraphQL */ `
  query GetActorCareer($id: ID!) {
    getActorCareer(id: $id) {
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
export const listActorCareers = /* GraphQL */ `
  query ListActorCareers(
    $filter: ModelActorCareerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listActorCareers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getProfileVideo = /* GraphQL */ `
  query GetProfileVideo($id: ID!) {
    getProfileVideo(id: $id) {
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
export const listProfileVideos = /* GraphQL */ `
  query ListProfileVideos(
    $filter: ModelprofileVideoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProfileVideos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getUserModel = /* GraphQL */ `
  query GetUserModel($id: ID!) {
    getUserModel(id: $id) {
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
export const listUserModels = /* GraphQL */ `
  query ListUserModels(
    $filter: ModelUserModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        events
        bookMarkedPostIdList
        castingListIds
        couponStamp
        recommender
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAuditionApplication = /* GraphQL */ `
  query GetAuditionApplication($id: ID!) {
    getAuditionApplication(id: $id) {
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
export const listAuditionApplications = /* GraphQL */ `
  query ListAuditionApplications(
    $filter: ModelAuditionApplicationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAuditionApplications(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        applicantAwsID
        applicantUsername
        applicantProfileID
        auditionID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEmailApplication = /* GraphQL */ `
  query GetEmailApplication($id: ID!) {
    getEmailApplication(id: $id) {
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
export const listEmailApplications = /* GraphQL */ `
  query ListEmailApplications(
    $filter: ModelEmailApplicationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmailApplications(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getPlfilApplication = /* GraphQL */ `
  query GetPlfilApplication($id: ID!) {
    getPlfilApplication(id: $id) {
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
export const listPlfilApplications = /* GraphQL */ `
  query ListPlfilApplications(
    $filter: ModelPlfilApplicationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlfilApplications(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getBoardPostModel = /* GraphQL */ `
  query GetBoardPostModel($id: ID!) {
    getBoardPostModel(id: $id) {
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
export const listBoardPostModels = /* GraphQL */ `
  query ListBoardPostModels(
    $filter: ModelBoardPostModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBoardPostModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getBoardCommentModel = /* GraphQL */ `
  query GetBoardCommentModel($id: ID!) {
    getBoardCommentModel(id: $id) {
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
export const listBoardCommentModels = /* GraphQL */ `
  query ListBoardCommentModels(
    $filter: ModelBoardCommentModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBoardCommentModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getSelectActorImageModel = /* GraphQL */ `
  query GetSelectActorImageModel($id: ID!) {
    getSelectActorImageModel(id: $id) {
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
export const listSelectActorImageModels = /* GraphQL */ `
  query ListSelectActorImageModels(
    $filter: ModelSelectActorImageModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSelectActorImageModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getAuditionRoleModel = /* GraphQL */ `
  query GetAuditionRoleModel($id: ID!) {
    getAuditionRoleModel(id: $id) {
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
export const listAuditionRoleModels = /* GraphQL */ `
  query ListAuditionRoleModels(
    $filter: ModelAuditionRoleModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAuditionRoleModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getPlfilStatus = /* GraphQL */ `
  query GetPlfilStatus($id: ID!) {
    getPlfilStatus(id: $id) {
      id
      num
      statusJson
      createdAt
      updatedAt
    }
  }
`;
export const listPlfilStatuses = /* GraphQL */ `
  query ListPlfilStatuses(
    $filter: ModelPlfilStatusFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlfilStatuses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        num
        statusJson
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProfileTourModel = /* GraphQL */ `
  query GetProfileTourModel($id: ID!) {
    getProfileTourModel(id: $id) {
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
export const listProfileTourModels = /* GraphQL */ `
  query ListProfileTourModels(
    $filter: ModelProfileTourModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProfileTourModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getProfileTourApplicationModel = /* GraphQL */ `
  query GetProfileTourApplicationModel($id: ID!) {
    getProfileTourApplicationModel(id: $id) {
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
export const listProfileTourApplicationModels = /* GraphQL */ `
  query ListProfileTourApplicationModels(
    $filter: ModelProfileTourApplicationModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProfileTourApplicationModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getOrderModel = /* GraphQL */ `
  query GetOrderModel($id: ID!) {
    getOrderModel(id: $id) {
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
export const listOrderModels = /* GraphQL */ `
  query ListOrderModels(
    $filter: ModelOrderModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrderModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getCouponHistory = /* GraphQL */ `
  query GetCouponHistory($id: ID!) {
    getCouponHistory(id: $id) {
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
export const listCouponHistories = /* GraphQL */ `
  query ListCouponHistories(
    $filter: ModelCouponHistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCouponHistories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getCompanyModel = /* GraphQL */ `
  query GetCompanyModel($id: ID!) {
    getCompanyModel(id: $id) {
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
export const listCompanyModels = /* GraphQL */ `
  query ListCompanyModels(
    $filter: ModelCompanyModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompanyModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getPermissionGroupModel = /* GraphQL */ `
  query GetPermissionGroupModel($id: ID!) {
    getPermissionGroupModel(id: $id) {
      id
      permissionGroupName
      permissionList
      createdAt
      updatedAt
      deletedAt
    }
  }
`;
export const listPermissionGroupModels = /* GraphQL */ `
  query ListPermissionGroupModels(
    $filter: ModelPermissionGroupModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPermissionGroupModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        permissionGroupName
        permissionList
        createdAt
        updatedAt
        deletedAt
      }
      nextToken
    }
  }
`;
export const getDeletedModel = /* GraphQL */ `
  query GetDeletedModel($id: ID!) {
    getDeletedModel(id: $id) {
      id
      data
      deletedAt
      createdAt
      updatedAt
    }
  }
`;
export const listDeletedModels = /* GraphQL */ `
  query ListDeletedModels(
    $filter: ModelDeletedModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDeletedModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        data
        deletedAt
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCastingListModel = /* GraphQL */ `
  query GetCastingListModel($id: ID!) {
    getCastingListModel(id: $id) {
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
export const listCastingListModels = /* GraphQL */ `
  query ListCastingListModels(
    $filter: ModelCastingListModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCastingListModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getCastingListItem = /* GraphQL */ `
  query GetCastingListItem($id: ID!) {
    getCastingListItem(id: $id) {
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
export const listCastingListItems = /* GraphQL */ `
  query ListCastingListItems(
    $filter: ModelCastingListItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCastingListItems(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getCouponModel = /* GraphQL */ `
  query GetCouponModel($id: ID!) {
    getCouponModel(id: $id) {
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
export const listCouponModels = /* GraphQL */ `
  query ListCouponModels(
    $filter: ModelCouponModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCouponModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getAuditionPostByID = /* GraphQL */ `
  query GetAuditionPostByID(
    $id: ID
    $sortDirection: ModelSortDirection
    $filter: ModelAuditionPostModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getAuditionPostByID(
      id: $id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getAuditionPostsByDate = /* GraphQL */ `
  query GetAuditionPostsByDate(
    $type: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAuditionPostModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getAuditionPostsByDate(
      type: $type
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getAuditionPostsByDueDate = /* GraphQL */ `
  query GetAuditionPostsByDueDate(
    $type: String
    $auditionEndAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAuditionPostModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getAuditionPostsByDueDate(
      type: $type
      auditionEndAt: $auditionEndAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getAuditionPostsByAwsID = /* GraphQL */ `
  query GetAuditionPostsByAwsID(
    $awsID: String
    $sortDirection: ModelSortDirection
    $filter: ModelAuditionPostModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getAuditionPostsByAwsID(
      awsID: $awsID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getAuditionPostsByUsername = /* GraphQL */ `
  query GetAuditionPostsByUsername(
    $username: String
    $sortDirection: ModelSortDirection
    $filter: ModelAuditionPostModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getAuditionPostsByUsername(
      username: $username
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getActorProfileByAwsID = /* GraphQL */ `
  query GetActorProfileByAwsID(
    $awsID: String
    $sortDirection: ModelSortDirection
    $filter: ModelActorProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getActorProfileByAwsID(
      awsID: $awsID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getActorProfileByDate = /* GraphQL */ `
  query GetActorProfileByDate(
    $type: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelActorProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getActorProfileByDate(
      type: $type
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getActorProfileByUpdatedAt = /* GraphQL */ `
  query GetActorProfileByUpdatedAt(
    $type: String
    $updatedAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelActorProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getActorProfileByUpdatedAt(
      type: $type
      updatedAt: $updatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getActorProfileByUsername = /* GraphQL */ `
  query GetActorProfileByUsername(
    $username: String
    $sortDirection: ModelSortDirection
    $filter: ModelActorProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getActorProfileByUsername(
      username: $username
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getActorProfileByActorName = /* GraphQL */ `
  query GetActorProfileByActorName(
    $actorName: String
    $sortDirection: ModelSortDirection
    $filter: ModelActorProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getActorProfileByActorName(
      actorName: $actorName
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getActorProfileByProfileUpdatedAt = /* GraphQL */ `
  query GetActorProfileByProfileUpdatedAt(
    $type: String
    $profileUpdatedAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelActorProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getActorProfileByProfileUpdatedAt(
      type: $type
      profileUpdatedAt: $profileUpdatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getActorCareersByAwsID = /* GraphQL */ `
  query GetActorCareersByAwsID(
    $awsID: String
    $sortDirection: ModelSortDirection
    $filter: ModelActorCareerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getActorCareersByAwsID(
      awsID: $awsID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getActorCareersByProfileID = /* GraphQL */ `
  query GetActorCareersByProfileID(
    $profileID: String
    $sortDirection: ModelSortDirection
    $filter: ModelActorCareerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getActorCareersByProfileID(
      profileID: $profileID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getActorCareersByUsername = /* GraphQL */ `
  query GetActorCareersByUsername(
    $username: String
    $sortDirection: ModelSortDirection
    $filter: ModelActorCareerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getActorCareersByUsername(
      username: $username
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getProfileVideoByUsername = /* GraphQL */ `
  query GetProfileVideoByUsername(
    $username: String
    $sortDirection: ModelSortDirection
    $filter: ModelprofileVideoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getProfileVideoByUsername(
      username: $username
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getProfileVideoByProfileID = /* GraphQL */ `
  query GetProfileVideoByProfileID(
    $profileID: String
    $sortDirection: ModelSortDirection
    $filter: ModelprofileVideoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getProfileVideoByProfileID(
      profileID: $profileID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getUserModelByAwsID = /* GraphQL */ `
  query GetUserModelByAwsID(
    $awsID: String
    $sortDirection: ModelSortDirection
    $filter: ModelUserModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getUserModelByAwsID(
      awsID: $awsID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        events
        bookMarkedPostIdList
        castingListIds
        couponStamp
        recommender
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserModelByEmail = /* GraphQL */ `
  query GetUserModelByEmail(
    $email: String
    $sortDirection: ModelSortDirection
    $filter: ModelUserModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getUserModelByEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        events
        bookMarkedPostIdList
        castingListIds
        couponStamp
        recommender
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEmailApplicationsByAuditionID = /* GraphQL */ `
  query GetEmailApplicationsByAuditionID(
    $auditionID: String
    $sortDirection: ModelSortDirection
    $filter: ModelEmailApplicationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getEmailApplicationsByAuditionID(
      auditionID: $auditionID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getPlfilApplicationsByAuditionID = /* GraphQL */ `
  query GetPlfilApplicationsByAuditionID(
    $auditionID: String
    $sortDirection: ModelSortDirection
    $filter: ModelPlfilApplicationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getPlfilApplicationsByAuditionID(
      auditionID: $auditionID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getPlfilApplicationsByRoleID = /* GraphQL */ `
  query GetPlfilApplicationsByRoleID(
    $roleID: String
    $sortDirection: ModelSortDirection
    $filter: ModelPlfilApplicationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getPlfilApplicationsByRoleID(
      roleID: $roleID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getPlfilApplicationsByApplicantProfileID = /* GraphQL */ `
  query GetPlfilApplicationsByApplicantProfileID(
    $applicantProfileID: String
    $sortDirection: ModelSortDirection
    $filter: ModelPlfilApplicationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getPlfilApplicationsByApplicantProfileID(
      applicantProfileID: $applicantProfileID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const plfilApplicationsByProfileIdSortedByDate = /* GraphQL */ `
  query PlfilApplicationsByProfileIdSortedByDate(
    $applicantProfileID: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPlfilApplicationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    plfilApplicationsByProfileIdSortedByDate(
      applicantProfileID: $applicantProfileID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const plfilApplicationsByUsernameSortedByDate = /* GraphQL */ `
  query PlfilApplicationsByUsernameSortedByDate(
    $applicantUsername: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPlfilApplicationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    plfilApplicationsByUsernameSortedByDate(
      applicantUsername: $applicantUsername
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getPlfilApplicationsByAuditionIDSortedByDate = /* GraphQL */ `
  query GetPlfilApplicationsByAuditionIDSortedByDate(
    $auditionID: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPlfilApplicationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getPlfilApplicationsByAuditionIDSortedByDate(
      auditionID: $auditionID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getBoardPostsByDate = /* GraphQL */ `
  query GetBoardPostsByDate(
    $type: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelBoardPostModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getBoardPostsByDate(
      type: $type
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getBoardPostsByShowAtLandingPageSortedByCreatedAt = /* GraphQL */ `
  query GetBoardPostsByShowAtLandingPageSortedByCreatedAt(
    $showAtLandingPage: Int
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelBoardPostModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getBoardPostsByShowAtLandingPageSortedByCreatedAt(
      showAtLandingPage: $showAtLandingPage
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getBoardPostsByCategorySortedByCreatedAt = /* GraphQL */ `
  query GetBoardPostsByCategorySortedByCreatedAt(
    $category: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelBoardPostModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getBoardPostsByCategorySortedByCreatedAt(
      category: $category
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getBoardPostsByHeadSortedByCreatedAt = /* GraphQL */ `
  query GetBoardPostsByHeadSortedByCreatedAt(
    $head: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelBoardPostModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getBoardPostsByHeadSortedByCreatedAt(
      head: $head
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getBoardPostsByShowAtProfileTourPageSortedByCreatedAt = /* GraphQL */ `
  query GetBoardPostsByShowAtProfileTourPageSortedByCreatedAt(
    $showAtProfileTourPage: Int
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelBoardPostModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getBoardPostsByShowAtProfileTourPageSortedByCreatedAt(
      showAtProfileTourPage: $showAtProfileTourPage
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getBoardCommentsByPostID = /* GraphQL */ `
  query GetBoardCommentsByPostID(
    $postID: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelBoardCommentModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getBoardCommentsByPostID(
      postID: $postID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getSelectActorImageModelsByActorProfileID = /* GraphQL */ `
  query GetSelectActorImageModelsByActorProfileID(
    $profileID: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSelectActorImageModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getSelectActorImageModelsByActorProfileID(
      profileID: $profileID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getProfileTourByStateSortedByCreatedAt = /* GraphQL */ `
  query GetProfileTourByStateSortedByCreatedAt(
    $state: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelProfileTourModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getProfileTourByStateSortedByCreatedAt(
      state: $state
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getProfileTourByCreatedAt = /* GraphQL */ `
  query GetProfileTourByCreatedAt(
    $type: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelProfileTourModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getProfileTourByCreatedAt(
      type: $type
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getProfileTourApplicationsByUsernameSortedByDate = /* GraphQL */ `
  query GetProfileTourApplicationsByUsernameSortedByDate(
    $username: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelProfileTourApplicationModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getProfileTourApplicationsByUsernameSortedByDate(
      username: $username
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const profileTourApplicationsByStatusSortedByDate = /* GraphQL */ `
  query ProfileTourApplicationsByStatusSortedByDate(
    $status: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelProfileTourApplicationModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ProfileTourApplicationsByStatusSortedByDate(
      status: $status
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getOrderSortedByCreatedAt = /* GraphQL */ `
  query GetOrderSortedByCreatedAt(
    $type: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelOrderModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getOrderSortedByCreatedAt(
      type: $type
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getOrderByCategorySortedByCreatedAt = /* GraphQL */ `
  query GetOrderByCategorySortedByCreatedAt(
    $category: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelOrderModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getOrderByCategorySortedByCreatedAt(
      category: $category
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getStatusByCategorySortedByCreatedAt = /* GraphQL */ `
  query GetStatusByCategorySortedByCreatedAt(
    $status: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelOrderModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getStatusByCategorySortedByCreatedAt(
      status: $status
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getOrderByUsernameSortedByCreatedAt = /* GraphQL */ `
  query GetOrderByUsernameSortedByCreatedAt(
    $username: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelOrderModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getOrderByUsernameSortedByCreatedAt(
      username: $username
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getCouponHistorySortedByCreatedAt = /* GraphQL */ `
  query GetCouponHistorySortedByCreatedAt(
    $type: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCouponHistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getCouponHistorySortedByCreatedAt(
      type: $type
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getCouponHistoryByUsername = /* GraphQL */ `
  query GetCouponHistoryByUsername(
    $username: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCouponHistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getCouponHistoryByUsername(
      username: $username
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getCompanyModelByshowSortedByCreatedAt = /* GraphQL */ `
  query GetCompanyModelByshowSortedByCreatedAt(
    $show: Int
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCompanyModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getCompanyModelByshowSortedByCreatedAt(
      show: $show
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getCompanyModelByshowSortedByUpdatedAt = /* GraphQL */ `
  query GetCompanyModelByshowSortedByUpdatedAt(
    $show: Int
    $updatedAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCompanyModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getCompanyModelByshowSortedByUpdatedAt(
      show: $show
      updatedAt: $updatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getCastingListItemsByCastingListId = /* GraphQL */ `
  query GetCastingListItemsByCastingListId(
    $castingListId: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCastingListItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getCastingListItemsByCastingListId(
      castingListId: $castingListId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getCouponByTypeSortedByCreatedAt = /* GraphQL */ `
  query GetCouponByTypeSortedByCreatedAt(
    $type: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCouponModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getCouponByTypeSortedByCreatedAt(
      type: $type
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const searchAuditionPostModels = /* GraphQL */ `
  query SearchAuditionPostModels(
    $filter: SearchableAuditionPostModelFilterInput
    $sort: SearchableAuditionPostModelSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchAuditionPostModels(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
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
      nextToken
      total
    }
  }
`;
export const searchActorProfiles = /* GraphQL */ `
  query SearchActorProfiles(
    $filter: SearchableActorProfileFilterInput
    $sort: SearchableActorProfileSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchActorProfiles(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
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
      nextToken
      total
    }
  }
`;
export const searchUserModels = /* GraphQL */ `
  query SearchUserModels(
    $filter: SearchableUserModelFilterInput
    $sort: SearchableUserModelSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchUserModels(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
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
        events
        bookMarkedPostIdList
        castingListIds
        couponStamp
        recommender
        createdAt
        updatedAt
      }
      nextToken
      total
    }
  }
`;
export const searchBoardPostModels = /* GraphQL */ `
  query SearchBoardPostModels(
    $filter: SearchableBoardPostModelFilterInput
    $sort: SearchableBoardPostModelSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchBoardPostModels(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
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
      nextToken
      total
    }
  }
`;
export const searchBoardCommentModels = /* GraphQL */ `
  query SearchBoardCommentModels(
    $filter: SearchableBoardCommentModelFilterInput
    $sort: SearchableBoardCommentModelSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchBoardCommentModels(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
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
      nextToken
      total
    }
  }
`;
export const searchOrderModels = /* GraphQL */ `
  query SearchOrderModels(
    $filter: SearchableOrderModelFilterInput
    $sort: SearchableOrderModelSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchOrderModels(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
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
      nextToken
      total
    }
  }
`;
