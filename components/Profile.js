
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
import SvgComponent from "../assets/BackgroundSvg.js";


// export default function Profile() {
//   return (
//     <View style={styles.container}>
//        <SvgComponent style={StyleSheet.absoluteFill} />

//      <View style={styles.content}>
//          <Text style={styles.title}>Colabrative Tasks</Text>
//          <Text style={styles.title}>Stay tuned...</Text>

//       </View>
//     </View>
//   );
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: '600',
//     color: '#000',
//     textAlign: 'center',
//     marginBottom: 8,
//   },
//     content: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });


// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
//   Image,
//   StatusBar,
//   Alert,
// } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { Ionicons } from '@expo/vector-icons';
// import SvgComponent from "../assets/BackgroundSvg.js";


// const ProfileScreen = () => {
//   const [user, setUser] = useState({
//     name: 'John Doe',
//     email: 'john.doe@example.com',
//     avatar: 'https://i.pravatar.cc/300?img=12',
//     tasksCompleted: 156,
//     currentStreak: 12,
//   });

//   const [friends] = useState([
//     { id: 1, name: 'Sarah Kim', avatar: 'https://i.pravatar.cc/300?img=5', tasksShared: 8 },
//     { id: 2, name: 'Mike Johnson', avatar: 'https://i.pravatar.cc/300?img=7', tasksShared: 5 },
//     { id: 3, name: 'Emma Wilson', avatar: 'https://i.pravatar.cc/300?img=9', tasksShared: 12 },
//     { id: 4, name: 'Alex Chen', avatar: 'https://i.pravatar.cc/300?img=13', tasksShared: 3 },
//   ]);

//   const handleLogout = () => {
//     Alert.alert(
//       'Logout',
//       'Are you sure you want to logout?',
//       [
//         { text: 'Cancel', style: 'cancel' },
//         { 
//           text: 'Logout', 
//           style: 'destructive',
//           onPress: () => {
//             // Handle logout logic here
//             console.log('User logged out');
//           }
//         },
//       ]
//     );
//   };

//   const handleEditProfile = () => {
//     console.log('Edit profile');
//   };

//   const handleFriendPress = (friend) => {
//     console.log('Friend pressed:', friend.name);
//   };

//   return (
//     <View style={styles.container}>
//     <SvgComponent style={StyleSheet.absoluteFill} />
//       <StatusBar barStyle="light-content" />
//       {/* Header with Gradient */}
//       {/* <LinearGradient
//         colors={['#8B5CF6', '#EC4899', '#F59E0B']}
//         start={{ x: 0, y: 0 }}
//         end={{ x: 1, y: 0 }}
//         style={styles.header}
//       >
//         <Text style={styles.headerTitle}>Profile</Text>
//       </LinearGradient> */}
//         <Text style={styles.headerTitle}>Profile</Text>
//         {/* Profile Section */}
//           <View style={styles.profileSection}>
//           {/* Avatar with Border */}
//           <View style={styles.avatarContainer}>
//             <LinearGradient
//               colors={['#8B5CF6', '#EC4899']}
//               style={styles.avatarGradientBorder}
//             >
//               <View style={styles.avatarInnerBorder}>
//                 <Image
//                   source={{ uri: user.avatar }}
//                   style={styles.avatar}
//                 />
//               </View>
//             </LinearGradient>
            
//             {/* Edit Button */}
//             <TouchableOpacity 
//               style={styles.editButton}
//               onPress={handleEditProfile}
//             >
//               <LinearGradient
//                 colors={['#10B981', '#059669']}
//                 style={styles.editButtonGradient}
//               >
//                 <Ionicons name="pencil" size={16} color="#FFF" />
//               </LinearGradient>
//             </TouchableOpacity>
//           </View>
//         </View>

//    {/* Stats */}
//         {/* <View style={styles.statsContainer}>
//            <View style={styles.statsCard}>
//            <View style={styles.statItem}>
//             <Text style={styles.statNumber}>{user.tasksCompleted}</Text>
//             <Text style={styles.statLabel}>Tasks Done</Text>
//            </View>
//            <View style={styles.statDivider} />
//            <View style={styles.statItem}>
//             <Text style={styles.statNumber}>{user.currentStreak}</Text>
//             <Text style={styles.statLabel}>Day Streak</Text>
//            </View>
//            </View>
//         </View> */}


//          <View style={styles.footer}>

//               <ScrollView 
//         style={styles.scrollView}
//          showsVerticalScrollIndicator={false}
//          contentContainerStyle={styles.scrollContent}
//       >
      
// {/* User Info */}
//         <View style={{marginTop: 60,}}>  
//               <Text style={styles.userName}>{user.name}</Text>
//               <Text style={styles.userEmail}>{user.email}</Text>
//         </View>
        
//         {/* Friends Section */}
//         <View style={styles.section}>
//           <View style={styles.sectionHeader}>
//             <Text style={styles.sectionTitle}>Friends</Text>
//             <Text style={styles.sectionCount}>{friends.length}</Text>
//           </View>

//           <View style={styles.friendsList}>
//             {friends.map((friend) => (
//               <TouchableOpacity
//                 key={friend.id}
//                 style={styles.friendCard}
//                 onPress={() => handleFriendPress(friend)}
//               >
//                 <Image
//                   source={{ uri: friend.avatar }}
//                   style={styles.friendAvatar}
//                 />
//                 <View style={styles.friendInfo}>
//                   <Text style={styles.friendName}>{friend.name}</Text>
//                   <Text style={styles.friendTasks}>
//                     {friend.tasksShared} shared tasks
//                   </Text>
//                 </View>
//                 <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
//               </TouchableOpacity>
//             ))}
//           </View>

//           {/* Add Friend Button */}
//           <TouchableOpacity style={styles.addFriendButton}>
//             <LinearGradient
//               colors={['#3B82F6', '#8B5CF6']}
//               style={styles.addFriendGradient}
//               start={{ x: 0, y: 0 }}
//               end={{ x: 1, y: 0 }}
//             >
//               <Ionicons name="person-add" size={20} color="#FFF" />
//               <Text style={styles.addFriendText}>Add Friend</Text>
//             </LinearGradient>
//           </TouchableOpacity>
//         </View>

//         {/* Settings Options */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>Settings</Text>
          
//           <View style={styles.settingsList}>
//             <TouchableOpacity style={styles.settingItem}>
//               <View style={styles.settingIconContainer}>
//                 <LinearGradient
//                   colors={['#3B82F6', '#2563EB']}
//                   style={styles.settingIconGradient}
//                 >
//                   <Ionicons name="notifications" size={20} color="#FFF" />
//                 </LinearGradient>
//               </View>
//               <Text style={styles.settingText}>Notifications</Text>
//               <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
//             </TouchableOpacity>

//             <TouchableOpacity style={styles.settingItem}>
//               <View style={styles.settingIconContainer}>
//                 <LinearGradient
//                   colors={['#10B981', '#059669']}
//                   style={styles.settingIconGradient}
//                 >
//                   <Ionicons name="lock-closed" size={20} color="#FFF" />
//                 </LinearGradient>
//               </View>
//               <Text style={styles.settingText}>Privacy</Text>
//               <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
//             </TouchableOpacity>

//             <TouchableOpacity style={styles.settingItem}>
//               <View style={styles.settingIconContainer}>
//                 <LinearGradient
//                   colors={['#F59E0B', '#D97706']}
//                   style={styles.settingIconGradient}
//                 >
//                   <Ionicons name="help-circle" size={20} color="#FFF" />
//                 </LinearGradient>
//               </View>
//               <Text style={styles.settingText}>Help & Support</Text>
//               <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
//             </TouchableOpacity>
//           </View>
//         </View>

//         {/* Logout Button */}
//         <TouchableOpacity 
//           style={styles.logoutButton}
//           onPress={handleLogout}
//         >
//           <LinearGradient
//             colors={['#EF4444', '#DC2626']}
//             style={styles.logoutGradient}
//           >
//             <Ionicons name="log-out-outline" size={22} color="#FFF" />
//             <Text style={styles.logoutText}>Logout</Text>
//           </LinearGradient>
//         </TouchableOpacity>

//         {/* Bottom Spacing */}
//         <View style={styles.bottomSpacing} />
//       </ScrollView>
//     </View>
// </View>

//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     //backgroundColor: '#F9FAFB',
//   },
//   footer: {
//     flex: 1,
//     //paddingTop:50,
//     backgroundColor: '#f1eef1ff',
//     borderTopLeftRadius: 50,
//     borderTopRightRadius: 50,
//     //borderRadius:50,
//     //marginTop: -10,
//     marginHorizontal: 15,
//     opacity: 0.85,
// },
//   header: {
//     paddingTop: 60,
//     paddingBottom: 20,
//     paddingHorizontal: 24,
//   },
//   headerTitle: {
//     fontSize: 26,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 100,
//     color: '#333',
//     paddingTop: 60,
//     paddingBottom: 20,
//   },
//   scrollView: {
//     flex: 1,
//   },
//   scrollContent: {
//     paddingBottom: 40,
//   },

//   statsCard: {
//     backgroundColor: '#FFF',
//     marginHorizontal: 50,
//     borderRadius: 16,
//     flexDirection: 'row',
//     paddingVertical: 15,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 8,
//     elevation: 4,
//     position: 'absolute',
//     bottom: -40,
//     left: 0,
//     right: 0,
//   },
//   statItem: {
//     flex: 1,
//     alignItems: 'center',
//   },
//   statDivider: {
//     width: 1,
//     backgroundColor: '#E0E0E0',
//   },
//   statNumber: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#212121',
//     marginBottom: 4,
//   },
//   statLabel: {
//     fontSize: 12,
//     color: '#757575',
//   },
  
//   profileSection: {
//     alignItems: 'center',
//    // marginBottom: -100,
//    // paddingHorizontal: 24,
//     //backgroundColor: '#FFF',
//     //borderBottomLeftRadius: 32,
//     //borderBottomRightRadius: 32,
//     //paddingBottom: 32,
//     //marginBottom: -50,
//     //marginBottom: 20,
//     //marginHorizontal: 50,
//     //borderRadius: 16,
//     //flexDirection: 'row',
//     //paddingVertical: 15,
//     //shadowColor: '#000',
//     //shadowOffset: { width: 0, height: 2 },
//     //shadowOpacity: 0.1,
//     //shadowRadius: 8,
//     //elevation: 15,
//     zIndex: 10,
//     position: 'absolute',
//     top: 120,
//     left: 0,
//     right: 0,
//   },
//   avatarContainer: {
//     //position: 'relative',
//     marginBottom: 16,
//   },
//   avatarGradientBorder: {
//     width: 128,
//     height: 128,
//     borderRadius: 64,
//     padding: 4,
//   },
//   avatarInnerBorder: {
//     width: '100%',
//     height: '100%',
//     borderRadius: 60,
//     backgroundColor: '#FFF',
//     padding: 4,
//   },
//   avatar: {
//     width: '100%',
//     height: '100%',
//     borderRadius: 56,
//   },
//   editButton: {
//     position: 'absolute',
//     bottom: 0,
//     right: 0,
//   },
//   editButtonGradient: {
//     width: 36,
//     height: 36,
//     borderRadius: 18,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderWidth: 3,
//     borderColor: '#FFF',
//   },
//   userName: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#111827',
//     marginBottom: 4,
//     alignSelf: 'center',
//   },
//   userEmail: {
//     fontSize: 14,
//     color: '#6B7280',
//     marginBottom: 24,
//     alignSelf: 'center',
//   },
//   statsContainer: {
//     flexDirection: 'row',
//     gap: 12,
//     width: '100%',
//   },
// //   statCard: {
// //     flex: 1,
// //     borderRadius: 16,
// //     overflow: 'hidden',
// //   },
//   statGradient: {
//     paddingVertical: 16,
//     paddingHorizontal: 16,
//     alignItems: 'center',
//   },
//   statIcon: {
//     marginBottom: 4,
//   },

 
//   section: {
//     paddingHorizontal: 24,
//     marginBottom: 24,
//     //marginTop: 70,
//   },
//   sectionHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#111827',
//   },
//   sectionCount: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#8B5CF6',
//   },
//   friendsList: {
//     gap: 12,
//     marginBottom: 16,
//   },
//   friendCard: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#FFF',
//     padding: 16,
//     borderRadius: 16,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.05,
//     shadowRadius: 8,
//     elevation: 2,
//   },
//   friendAvatar: {
//     width: 48,
//     height: 48,
//     borderRadius: 24,
//     marginRight: 12,
//   },
//   friendInfo: {
//     flex: 1,
//   },
//   friendName: {
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#111827',
//     marginBottom: 2,
//   },
//   friendTasks: {
//     fontSize: 13,
//     color: '#6B7280',
//   },
//   addFriendButton: {
//     borderRadius: 16,
//     overflow: 'hidden',
//   },
//   addFriendGradient: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingVertical: 16,
//     gap: 8,
//   },
//   addFriendText: {
//     color: '#FFF',
//     fontSize: 16,
//     fontWeight: '600',
//   },
//   settingsList: {
//     gap: 12,
//     marginTop: 16,
//   },
//   settingItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#FFF',
//     padding: 16,
//     borderRadius: 16,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.05,
//     shadowRadius: 8,
//     elevation: 2,
//   },
//   settingIconContainer: {
//     marginRight: 12,
//   },
//   settingIconGradient: {
//     width: 40,
//     height: 40,
//     borderRadius: 12,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   settingText: {
//     flex: 1,
//     fontSize: 16,
//     fontWeight: '600',
//     color: '#111827',
//   },
//   logoutButton: {
//     marginHorizontal: 24,
//     borderRadius: 16,
//     overflow: 'hidden',
//     marginTop: 8,
//   },
//   logoutGradient: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingVertical: 16,
//     gap: 8,
//   },
//   logoutText: {
//     color: '#FFF',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   bottomSpacing: {
//     height: 80,
//   },
// });

// export default ProfileScreen;


import React, { useState,useEffect, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  StatusBar,
  Alert,
  Dimensions,
  Switch 
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { changeLanguage } from '../src/changeLanguage';
import { useTranslation } from 'react-i18next';
import { logout } from '../utils/logout';
import { useTodos } from '../context/TodoContext';
import { useTheme } from '../context/ThemeContext';
//import {  createStyles } from "react";

const { width } = Dimensions.get('window');

const ProfileScreen = ({navigation}) => {

  const {
      tasks,
      DailyTasks,
      generalTasks,
      addTodo,
      deleteTodo,
      update,
      loadTasks,
      toggleCheck,
      clearTasks,
      formattedDate, 
      username,email
    } = useTodos();
const { theme, isDarkMode, toggleTheme } = useTheme();
const styles  = createStyles(theme);

  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: 'https://i.pravatar.cc/300?img=12',
    followers: 32,
    following: 78,
    tasksCompleted: 156,
    currentStreak: 12,
  });

  const [friends] = useState([
    { id: 1, name: 'Sarah Kim', avatar: 'https://i.pravatar.cc/300?img=5', tasksShared: 8 },
    { id: 2, name: 'Mike Johnson', avatar: 'https://i.pravatar.cc/300?img=7', tasksShared: 5 },
    { id: 3, name: 'Emma Wilson', avatar: 'https://i.pravatar.cc/300?img=9', tasksShared: 12 },
    { id: 4, name: 'Alex Chen', avatar: 'https://i.pravatar.cc/300?img=13', tasksShared: 3 },
  ]);

  const [isArabic, setIsArabic] = useState(false);
  const { setToken, setUsername } = useTodos();

    useEffect(() => {
    const loadLanguage = async () => {
      const savedLang = await AsyncStorage.getItem('language');
      if (savedLang === 'ar') setIsArabic(true);
    };
    loadLanguage();
  }, []);

  const onToggleLanguage = async (value) => {
    setIsArabic(value);
    await changeLanguage(value ? 'ar' : 'en');
  };

   const handleLogout = async () => {
            await logout();

            setToken(null);
            setUsername(null);

            navigation.replace('SignIn');
    // Alert.alert(
    //   'Logout',
    //   'Are you sure you want to logout?',
    //   [
    //     { text: 'Cancel', style: 'cancel' },
    //     {
    //       text: 'Logout',
    //       style: 'destructive',
    //       onPress: async () => {
    //         await logout();

    //         setToken(null);
    //         setUsername(null);

    //         navigation.replace('SignIn');
    //       },        },
    //   ]
    // );
  };

  const handleFollow = () => {
    console.log('Follow pressed');
  };

  const handleFriendPress = (friend) => {
    console.log('Friend pressed:', friend.name);
  };

    const handleEditProfile = () => {
    console.log('Edit profile');
  };

  const { t } = useTranslation();
  return (
    
    <View style={styles.container}>
      {/* <SvgComponent style={StyleSheet.absoluteFill} /> */}
      <StatusBar barStyle="light-content" />
      
      {/* Header with Curved Background */}
      <View style={styles.headerContainer}>
        {/* <LinearGradient
          colors={[ '#c9dfd6','#abc4ba']}
          style={styles.headerGradient}
        > */}
          {/* Decorative shapes */}
          {/* <View style={styles.decorativeShape1} />
          <View style={styles.decorativeShape2} /> */}
          
          {/* Header Content */}
          <View style={styles.headerContent}>
          
            <Text style={styles.headerTitle}>{t('Profile')}</Text>
            <View style={styles.placeholder} />
          </View>

            <View style={styles.avatarContainer}>
            <View style={styles.avatarBorder}>
              <Image
                source={{ uri: user.avatar }}
                style={styles.avatar}
              />
            </View>
             <TouchableOpacity 
              style={styles.editButton}
              onPress={handleEditProfile}
            >
              <LinearGradient
                colors={['#10B981', '#059669']}
                style={styles.editButtonGradient}
              >
                <Ionicons name="pencil" size={16} color="#FFF" />
              </LinearGradient>
            </TouchableOpacity>
          </View>

        {/* </View></LinearGradient> */}

      </View>

 {/* Curved bottom */}
        {/* <View style={styles.curvedBottom} /> */}

      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Profile Card */}
        <View style={styles.profileCard}>
          {/* Avatar overlapping header */}
         

          {/* User Name */}
          <Text style={styles.userName}>{username}</Text>

          {/* Follow Button */}
          {/* <TouchableOpacity 
            style={styles.followButton}
            onPress={handleFollow}
          >
            <Text style={styles.followButtonText}>Follow</Text>
          </TouchableOpacity> */}

          {/* Stats Row */}
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>{user.followers}</Text>
              <Text style={styles.statLabel}>{t('friends')}</Text>
            </View>
            {/* <View style={styles.statItem}>
              <Text style={styles.statNumber}>{user.following}</Text>
              <Text style={styles.statLabel}>Tasks</Text>
            </View> */}
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>3</Text>
              <Text style={styles.statLabel}>colab Tasks</Text>
            </View>
          </View>

            <View style={{ marginTop: 10 }} >
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20, }}>
              <Text style={styles.friendName}>{t('user name')}</Text>
              <Text style={{ fontSize: 14, fontWeight: "600", color: "#8d8b8bff" }}>{username}</Text>
            </View>                
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20, }}>
              <Text style={styles.friendName}>{t('email')}</Text>
              <Text style={{ fontSize: 14, fontWeight: "600", color: "#8d8b8bff" }}>{email}</Text>
            </View> 
            </View>
             
        </View>

        {/* Friends Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('friends')}</Text>
          <View style={styles.friendsCard}>
            {friends.map((friend, index) => (
              <TouchableOpacity
                key={friend.id}
                style={[
                  styles.friendItem,
                  index !== friends.length - 1 && styles.friendItemBorder
                ]}
                onPress={() => handleFriendPress(friend)}
              >
                <Image
                  source={{ uri: friend.avatar }}
                  style={styles.friendAvatar}
                />
                <View style={styles.friendInfo}>
                  <Text style={styles.friendName}>{friend.name}</Text>
                  <Text style={styles.friendTasks}>
                    {friend.tasksShared} {t('shared tasks')}
                  </Text>
                </View>
                <Ionicons name="chevron-forward" size={20} color="#BDBDBD" />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Settings Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('Settings')}</Text>
          <View style={styles.settingsCard}>

            <TouchableOpacity style={[styles.settingItem, styles.settingItemBorder]}>
              <View style={styles.settingLeft}>
                <View style={[styles.settingIcon, { backgroundColor: '#E3F2FD' }]}>
                  <Ionicons name="notifications-outline" size={20} color="#2196F3" />
                </View>
                <Text style={styles.settingText}>{t('language')}</Text>
              </View>
              <Text>{t('Language')}</Text>
              <Switch
                value={isArabic}
                onValueChange={onToggleLanguage}
              />
            </TouchableOpacity>

            <TouchableOpacity style={[styles.settingItem, styles.settingItemBorder]}>
              <View style={styles.settingLeft}>
                <View style={[styles.settingIcon, { backgroundColor: '#E3F2FD' }]}>
                  <Ionicons name="notifications-outline" size={20} color="#2196F3" />
                </View>
                <Text style={styles.settingText}>{t('theme dark')}</Text>
              </View>
              <Switch
                value={isDarkMode}
                onValueChange={toggleTheme}
               // trackColor={{ false: '#767577', true: '#abc4ba' }}
               // thumbColor={isDarkMode ? '#ffffff' : '#f4f3f4'}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.settingItem}>
              <View style={styles.settingLeft}>
                <View style={[styles.settingIcon, { backgroundColor: '#FFF3E0' }]}>
                  <Ionicons name="help-circle-outline" size={20} color="#FF9800" />
                </View>
                <Text style={styles.settingText}>Help & Support</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#BDBDBD" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Logout Button */}
        <TouchableOpacity 
          style={styles.logoutButton}
          onPress={handleLogout}
        >
          <LinearGradient
            colors={['#EF5350', '#E53935']}
            style={styles.logoutGradient}
          >
            <Ionicons name="log-out-outline" size={20} color="#FFF" />
            <Text style={styles.logoutText}>{t('Logout')}</Text>
          </LinearGradient>
        </TouchableOpacity>

        <View style={styles.bottomSpacing} />
      </ScrollView>
    </View>
  );
};

const createStyles = (theme) => StyleSheet.create({
  container: {
    flex: 1,
   // backgroundColor: theme.background,
    //backgroundColor: '#F5F7FA',
  },
  headerContainer: {
    position: 'relative',
    height: 200,
  },
  headerGradient: {
    //height: 280,
    paddingTop: 20,
    overflow: 'hidden',
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop:'5%',
    paddingHorizontal: 16,
   // zIndex: 10,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFF',
  },
  placeholder: {
    width: 40,
  },
  avatarContainer: {
    position: 'relative',
    top: '25%',
    alignItems: 'center',
    zIndex: 10,
  },
  avatarBorder: {
    width: 150,
    height: 150,
    borderRadius: 80,
    backgroundColor: '#FFF',
    padding: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 8,
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 75,
  },
   editButton: {
    position: 'absolute',
    bottom: 0,
    right: '35%',
  },
  editButtonGradient: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#FFF',
  },
   scrollView: {
    flex: 1,
    paddingTop: 20,
    marginTop: 55,
   // borderTopLeftRadius: 30,
    //borderTopRightRadius: 30,
    //paddingTop:50,
    // backgroundColor: '#F5F7FA',
    backgroundColor: theme.background,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    //borderRadius:50,
    //marginTop: -10,
    //marginHorizontal: 9,
    opacity: 0.85,
  },

  scrollContent: {
    paddingBottom: 75,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  profileCard: {
    backgroundColor: theme.cardBackground,
    //backgroundColor: '#FFF',
    marginHorizontal: 20,
   // marginTop: 100,
    borderRadius: 20,
    padding: 24,
    //paddingTop: 80,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 5,
    marginBottom: 20,
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2C3E50',
    textAlign: 'center',
    marginBottom: 16,
  },
  followButton: {
    backgroundColor: '#3F51B5',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    alignSelf: 'center',
    marginBottom: 24,
    shadowColor: '#3F51B5',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  followButtonText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: '600',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    //paddingBottom: 14,
    //borderBottomWidth: 1,
    //borderBottomColor: '#F0F0F0',
    marginBottom: 5,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 13,
    color: '#95A5A6',
  },
  progressSection: {
    marginTop: 8,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  progressTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2C3E50',
  },
  weekBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  weekText: {
    fontSize: 13,
    color: '#95A5A6',
  },
  progressContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  legend: {
    flex: 1,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  legendDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 8,
  },
  legendText: {
    fontSize: 14,
    color: '#2C3E50',
    flex: 1,
  },
  legendValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2C3E50',
  },
  chartContainer: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chartCenter: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chartTotal: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2C3E50',
  },
  section: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 12,
  },
  friendsCard: {
    backgroundColor: theme.cardBackground,
    // backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },
  friendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  friendItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F5',
  },
  friendAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: 12,
  },
  friendInfo: {
    flex: 1,
  },
  friendName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2C3E50',
    marginBottom: 2,
  },
  friendTasks: {
    fontSize: 13,
    color: '#95A5A6',
  },
  settingsCard: {
    // backgroundColor: '#FFF',
    backgroundColor: theme.cardBackground,
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
  },
  settingItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F5',
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingIcon: {
    width: 38,
    height: 38,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  settingText: {
    fontSize: 15,
    color: '#2C3E50',
    fontWeight: '500',
  },
  logoutButton: {
    marginHorizontal: 20,
    borderRadius: 16,
    overflow: 'hidden',
    //marginTop: 8,
  },
  logoutGradient: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
    gap: 10,
  },
  logoutText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
  bottomSpacing: {
    height: 40,
  },
});

export default ProfileScreen;