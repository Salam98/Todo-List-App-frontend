import React from 'react'
import { StyleSheet, Text ,View,ScrollView, FlatList , SectionList, Dimensions, ImageBackground} from 'react-native'
import { ProgressCircle , PieChart, BarChart , LineChart } from 'react-native-chart-kit'
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from "expo-linear-gradient";
import { useTodos } from "../context/TodoContext";
import SvgComponent from "../assets/BackgroundSvg.js";
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';


const screenWidth = Dimensions.get('window').width;



export default function Dashboard(route) {


   const {DailyTasks, streak} = useTodos();
   const totalTasks = DailyTasks.length;
   const completedTasks = DailyTasks.filter(([id,todo,check,count,type]) => check==true).length;
   //const mostComtimtTask_count=  DailyTasks.reduce((a, b) => (a[3] > b[3] ? a : b))[3] ;
   const mostComtimtTask_count = DailyTasks.reduce(
                                (max, task) => Math.max(max, task.count), 0);
   const mostComtimtTask = totalTasks>0? mostComtimtTask_count==0?'':  DailyTasks.reduce((a, b) => (a[3] > b[3] ? a : b)) [1] : "" ;
   const pendingTasks = totalTasks - completedTasks;
   const progress = totalTasks > 0 ? completedTasks / totalTasks * 100: 0;
   const { t } = useTranslation();
   const { theme } = useTheme();
   const styles = createStyles(theme);

return (
  <View style={{ flex: 1 }}>
  {/* <SvgComponent style={StyleSheet.absoluteFill} /> */}
  <SafeAreaView  style={{ flex: 1 , backgroundColor: 'transparent'}}>
    <ScrollView style={styles.container} 
            contentContainerStyle={{ paddingBottom: 125 }} 
             showsVerticalScrollIndicator={false}>
      <Text style={styles.header}> {t('dashboard')}</Text>

  
      {/* Daily Progress */}
      <View style={styles.card}>
        <Text style={styles.title}>{t('today Progress')}</Text>
        <View style={styles.center}>
          <AnimatedCircularProgress
            size={160}
            width={12}
            fill={progress}
            tintColor="#4CAF50"
            backgroundColor="#E0E0E0"
            arcSweepAngle={180}   
            rotation={270}    
            lineCap="round">
            {() => (
              <Text style={styles.progressText}>
                {Math.round(progress)}%
              </Text>
            )}
          </AnimatedCircularProgress>
           <Text style={styles.subtitle}>
          {completedTasks}/{totalTasks} {t('completed Tasks')}
        </Text>
        </View>
      </View>

      <View style={styles.rowContainer}>
  <View style={[styles.card, styles.smallCard]}>
    <Text style={styles.title}>{t('streak')}🔥</Text>
    <Text style={styles.streak}>{streak}</Text>
    <Text style={styles.subtitle}> {t('streak title')}</Text>
  </View>

  <View style={[styles.card, styles.smallCard]}>
    <Text style={styles.title}>{t('champion todoist')}🏆</Text>
    <Text style={styles.todoName}>{mostComtimtTask.count===0? " ": mostComtimtTask}</Text>
  </View>
</View>


<View style={styles.card}>
  <Text style={styles.title}>🔁 {t('todos count')}</Text>
  {
    totalTasks === 0 ? (
      <Text style={styles.subtitle}>{t('no tasks')}</Text>
    ) : null
  }
  {DailyTasks.map(todo => (
    <View key={todo[0]} style={{ marginBottom: 10 }}>
      <Text style={{ fontWeight: 'bold', marginBottom: 4 }}>{todo[1]}</Text>
      <View style={{ height: 10, backgroundColor: '#eee', borderRadius: 5 }}>
        <View
          style={{
            height: 10,
            width: `${(todo[3] / 20) * 100}%`, 
            backgroundColor: '#4CAF50',
            borderRadius: 5,
          }}
        />
      </View>
      <Text style={{ fontSize: 12, color: '#555' }}>{todo[3]} {t('time')}</Text>
    </View>
  ))}
</View>


      {/* Monthly Progress */}
      {/* <View style={styles.card}>
        <Text style={styles.title}>📊 Monthly Progress</Text>
        <PieChart
          data={pieData}
          width={screenWidth - 40}
          height={220}
          chartConfig={{
            backgroundColor: '#fff',
            backgroundGradientFrom: '#fff',
            backgroundGradientTo: '#fff',
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
        />
      </View> */}
       
    </ScrollView>
    </SafeAreaView>
 </View>
  );
};

const createStyles = (theme) =>StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingBottom: 20,
    marginHorizontal: 20,
   // backgroundColor: '#F5F5F5',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: theme.text,
  },
  card: {
    backgroundColor: theme.cardBackground,
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  rowContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  gap: 10, 
},

smallCard: {
  flex: 1,
},
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: theme.text,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 14,
    color: theme.text,
    //marginTop: 10,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  streak: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FF9800',
    textAlign: 'center',
    marginVertical: 10,
  },
  todoName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2196F3',
    textAlign: 'center',
  },
  todoStreak: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginTop: 4,
  },
});


