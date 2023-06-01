import Name from './components/Name'
import Days from './components/Days'
import DropDown from './components/DropDown'
const App = () => {

  let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']


  let dias = ["lunes", 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo']
  let tag = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"]
  let dag = ["måndag", "tisdag", "onsdag", "torsdag", "fredag", "lördag", "söndag"]
  const daysInKorean = ['wollyoil', 'hwayoil', 'suyoil', 'mongnyoil', 'geumyoil', 'toyoil', 'illyoil'];
  const Tydzień = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"];
  //French
  let jour = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];
//Mandarin
  const daysInMandarin = ["星期一", "星期二", "星期三",  "星期四",  "星期五", "星期六",  "星期日"]

  return <div>
    Hello world

    <ul>
      {/* {days.map(day => <li>{day}</li>) */}
      {days.map(day => {
        return(
      <li>{day}</li>)
    })}

    </ul>
    

    <Name firstName="Joy" lastName="He" days={1} />
    <Name firstName="Katie" lastName="Toney" days={2} />

    <Days days={dias} language="Spanish" />
    <Days days={tag} language="German" />

    <DropDown days={dag} language="norwegian" />
    <DropDown days={daysInMandarin} language="Mandarin" />
  </div>
}

export default App;
