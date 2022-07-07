import React from 'react';
import imgplaceholder from '../../assets/img/userplaceholder.png';
import {Alert, AlertIcon, Box, Center, Grid} from '@chakra-ui/react';

export default function DefaultCard({userInfo}) {
  return (
    <div key={Date.now()}>
      <div className="member-card">
        <div className="member-info">
          <Alert status="info">
            <AlertIcon />
            NO USERS
          </Alert>
          <div className="status">
            <table>
              <tbody>
                <tr>
                  <th>{''}</th>
                  <td>{userInfo}</td>
                </tr>
                <tr>
                  <th></th>
                  <td></td>
                </tr>
                <tr>
                  <th></th>
                  <td></td>
                </tr>
              </tbody>
            </table>
            <div>
              <button>service</button>
              <button>Get $</button>
            </div>
          </div>
        </div>
        <div className="member-privileges">
          <div>🎾</div>
          <div>G(1)</div>
          <button>Guest Waiver</button>
        </div>
        <div className="member-profile-n-fam">
          <Box className="card-profile-picture" bg="#BEE3F8" h="32vh">
            <Center>
              <Grid>
                <div>
                  <img
                    src={imgplaceholder}
                    alt="img placeholder"
                    width="200px"
                    height="200px"
                  />
                </div>
              </Grid>
            </Center>
          </Box>
        </div>
      </div>
    </div>
  );
}
