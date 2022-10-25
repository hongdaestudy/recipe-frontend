//import AuthService from "../../services/auth.service";
import { SubmitHandler, useForm } from 'react-hook-form';
import { TextField, Button, Box, Tabs, Tab, Typography } from '@mui/material';
import styled from "styled-components";
import { useState } from "react";
import ProfileImageDialog from './profileImageDialog';


interface Inputs {
  email: string
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
    value: index
  };
}
export default function Myhome() {
  
  const [value, setValue] = useState(1);
  const [nestedValue, setNestedValue] = useState(11);

  const handleValueChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    const newNestedValue = parseInt(newValue + "1")
    setNestedValue(newNestedValue);
  };

  const handleNestedValueChange = (event: React.SyntheticEvent, newValue: number) => {
    setNestedValue(newValue);
  };

  const [profileImageDialogOpen, setProfileImageDialogOpen] = useState(false);
  const openProfileImageDialog = () => {
    setProfileImageDialogOpen(true);
  }
  const closeProfileImageDialog = () => {
    setProfileImageDialogOpen(false);
  }
  return (
    <div>
      <ContentWrapper>
        <Left>
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleValueChange} aria-label="basic tabs example">
                <Tab label="레시피" {...a11yProps(1)} />
                <Tab label="요리후기" {...a11yProps(2)} />
                <Tab label="댓글" {...a11yProps(3)} />
                <Tab label="스토리" {...a11yProps(4)} />
                <Tab label="쇼핑후기" {...a11yProps(5)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={1}>
              <Tabs value={nestedValue} onChange={handleNestedValueChange}>
                <Tab label="공개중" {...a11yProps(11)}/>
                <Tab label="작성중" {...a11yProps(12)}/>
              </Tabs>
              <TabPanel value={nestedValue} index={11}>
                공개중
              </TabPanel>
              <TabPanel value={nestedValue} index={12}>
                작성중
              </TabPanel>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Tabs value={nestedValue} onChange={handleNestedValueChange}>
                <Tab label="내가 쓴 요리후기" {...a11yProps(21)}/>
                <Tab label="받은 요리후기" {...a11yProps(22)}/>
              </Tabs>
              <TabPanel value={nestedValue} index={21}>
                내가 쓴 요리후기
              </TabPanel>
              <TabPanel value={nestedValue} index={22}>
                받은 요리후기
              </TabPanel>
            </TabPanel>
            <TabPanel value={value} index={3}>
              <Tabs value={nestedValue} onChange={handleNestedValueChange}>
                <Tab label="내가 쓴 댓글" {...a11yProps(31)}/>
                <Tab label="받은 댓글" {...a11yProps(32)}/>
              </Tabs>
              <TabPanel value={nestedValue} index={31}>
                내가 쓴 댓글
              </TabPanel>
              <TabPanel value={nestedValue} index={32}>
                받은 댓글
              </TabPanel>
            </TabPanel>
            <TabPanel value={value} index={4}>
              Item Four
            </TabPanel>
            <TabPanel value={value} index={5}>
              Item Five
            </TabPanel>
          </Box>
        </Left>
        <Right>
          <MyhomeMain>
            <MyhomeMainT />
            <MyhomeMainInfo>
              <InfoPic>
                <Button onClick={() => openProfileImageDialog()}
                  style={{cursor: "pointer"}}
                >
                  <img
                    style={{width: "110px", height: "110px", borderRadius:"50%"}}
                    src="https://recipe1.ezmember.co.kr/cache/rpf/2021/10/28/48def6d12e258134958cf9d8ff37046d1.jpg" alt="" />
                </Button>
                <Button onClick={() => openProfileImageDialog()}
                  style={{position:"absolute", right: "-2px", top:"-2px", cursor: "pointer"}}
                >
                  <img
                    style={{width: "42px", height:"42px"}}
                    src="https://recipe1.ezmember.co.kr/img/mobile/icon_camera2.png" alt="" />
                </Button>
              </InfoPic>
              <div>
                <b style={{display: "block"}}>Name sample</b>
                <Button onClick={() => openProfileImageDialog()} style={{cursor: "pointer"}}>
                  <u>자기소개를 등록할 수  있습니다.</u>
                </Button>
              </div>
              <div>
                <Button>
                  <span>
                    총조회<b style={{marginLeft: "4px"}}>7,777</b>
                  </span>
                </Button>
                <span style={{margin: "0 8px"}}>·</span>
                <Button onClick={() => alert()} style={{cursor: "pointer"}}>
                  <span>팔로워<b style={{marginLeft: "4px"}}>37</b>
                  </span>
                </Button>
                <span style={{margin: "0 8px"}}>·</span>
                <Button onClick={() => alert()} style={{cursor: "pointer"}}>
                  <span>팔로잉<b style={{marginLeft: "4px"}}>37</b></span>
                </Button>
              </div>
            </MyhomeMainInfo>
          </MyhomeMain>
        </Right>
      </ContentWrapper>

      <ProfileImageDialog open={profileImageDialogOpen} handleClose={closeProfileImageDialog} />
    </div>
    
  )
}

const ContentWrapper = styled.div`
  margin: 0 auto;
  padding-bottom: 40px;
  padding-top: 40px;
  display: flex;
  width: 100%;
`

const Left = styled.div`
  flex: 2;
`
const Right = styled.div`
  flex: 1;
  border: 1px solid lightgray;
`
const MyhomeMain = styled.div`
  margin-bottom: 20px;
`

const MyhomeMainT = styled.div`
  background: url(https://recipe1.ezmember.co.kr/img/mobile/my_pic_d3.jpg) left top no-repeat;
  background-size: cover;

  height: 150px;
  margin: 0 auto;
  padding-top: 22px;
  position: relative;
  border-bottom: 1px solid #ddd;
`

const MyhomeMainInfo = styled.div`
  text-align: center;
  margin-top: -70px;
  padding-bottom: 5px;
`

const InfoPic = styled.div`
  display: inline-block;
  vertical-align: top;
  position: relative;
  padding: 4px;
  margin: 0 auto;
  background: url(//recipe1.ezmember.co.kr/img/mobile/shop_bg_name.png) left top;
  border-radius: 50%;
`