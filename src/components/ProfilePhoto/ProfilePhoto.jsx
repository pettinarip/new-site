import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import styled from "@emotion/styled"

const ProfilePhotoStyled = styled.div`
  padding: 30px 50px;
  text-align: center;

  .ProfilePhoto-photo {
    border-radius: 50%;
    overflow: hidden;
    max-width: 300px;
    margin: 0 auto;
  }
`

const ProfilePhoto = ({ photo }) => (
  <ProfilePhotoStyled>
    <Img className="ProfilePhoto-photo" fluid={photo} alt="Profile" />
  </ProfilePhotoStyled>
)

ProfilePhoto.propTypes = {
  photo: PropTypes.object.isRequired,
}

export default ProfilePhoto
