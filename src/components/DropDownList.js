import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserActions } from "@/store/UserSlice";
import classes from "./DropDownList.module.css";
const DropDownList = (props) => {
  const user = useSelector((state) => state.user);
  const loggedin = user.id > 0 ? user.nationality : "";
  return (
    <Fragment>
      {/* loggedin && */}
      <select
        value={props.value}
        onChange={props.onChange}
        className="text-2xl rounded-xl w-60"
        name="nationality"
        required
      >
        <option value="egyptian" selected>
          {" "}
          Egyptian{" "}
        </option>
        <option value="american">American</option>
        <option value="qatari">Qatari</option>
        <option value="saudi">Saudi</option>
        <option value="kuwaiti">Kuwaiti</option>
        <option value="lebanese">Lebanese</option>
        <option value="french">French</option>
        <option value="british">British</option>
        <option value="italian">Italian</option>
        <option value="canadian">Canadian</option>
        <option value="german">German</option>
        <option value="polish">Polish</option>
        <option value="portuguese">Portuguese</option>
        <option value="spanish">Spanish</option>
        <option value="swiss">Swiss</option>
        <option value="syrian">Syrian</option>
        <option value="tunisian">Tunisian</option>
        <option value="turkish">Turkish</option>
        <option value="ugandan">Ugandan</option>
        <option value="ukrainian">Ukrainian</option>
        <option value="romanian">Romanian</option>
        <option value="russian">Russian</option>
        <option value="argentinean">Argentinean</option>
        <option value="armenian">Armenian</option>
        <option value="australian">Australian</option>
        <option value="austrian">Austrian</option>
        <option value="bahamian">Bahamian</option>
        <option value="bahraini">Bahraini</option>
        <option value="brazilian">Brazilian</option>
        <option value="algerian">Algerian</option>
        <option value="cameroonian">Cameroonian</option>
        <option value="central african">Central African</option>
        <option value="chadian">Chadian</option>
        <option value="chilean">Chilean</option>
        <option value="chinese">Chinese</option>
        <option value="colombian">Colombian</option>
        <option value="costa rican">Costa Rican</option>
        <option value="croatian">Croatian</option>
        <option value="cuban">Cuban</option>
        <option value="cypriot">Cypriot</option>
        <option value="czech">Czech</option>
        <option value="danish">Danish</option>
        <option value="dutch">Dutch</option>
        <option value="ecuadorean">Ecuadorean</option>
        <option value="emirian">Emirian</option>
        <option value="equatorial guinean">Equatorial Guinean</option>
        <option value="eritrean">Eritrean</option>
        <option value="estonian">Estonian</option>
        <option value="ethiopian">Ethiopian</option>
        <option value="fijian">Fijian</option>
        <option value="filipino">Filipino</option>
        <option value="finnish">Finnish</option>
        <option value="gabonese">Gabonese</option>
        <option value="gambian">Gambian</option>
        <option value="georgian">Georgian</option>
        <option value="ghanaian">Ghanaian</option>
        <option value="greek">Greek</option>
        <option value="grenadian">Grenadian</option>
        <option value="guatemalan">Guatemalan</option>
        <option value="guinea-bissauan">Guinea-Bissauan</option>
        <option value="guinean">Guinean</option>
        <option value="guyanese">Guyanese</option>
        <option value="haitian">Haitian</option>
        <option value="herzegovinian">Herzegovinian</option>
        <option value="honduran">Honduran</option>
        <option value="hungarian">Hungarian</option>
        <option value="icelander">Icelander</option>
        <option value="indian">Indian</option>
        <option value="latvian">Latvian</option>
        <option value="indonesian">Indonesian</option>
        <option value="iranian">Iranian</option>
        <option value="iraqi">Iraqi</option>
        <option value="irish">Irish</option>
        <option value="ivorian">Ivorian</option>
        <option value="jamaican">Jamaican</option>
        <option value="japanese">Japanese</option>
        <option value="jordanian">Jordanian</option>
        <option value="liberian">Liberian</option>
        <option value="libyan">Libyan</option>
        <option value="luxembourger">Luxembourger</option>
        <option value="macedonian">Macedonian</option>
        <option value="malagasy">Malagasy</option>
        <option value="malawian">Malawian</option>
        <option value="malaysian">Malaysian</option>
        <option value="mexican">Mexican</option>
        <option value="monacan">Monacan</option>
        <option value="mongolian">Mongolian</option>
        <option value="moroccan">Moroccan</option>
        <option value="new zealander">New Zealander</option>
        <option value="nigerien">Nigerien</option>
        <option value="north korean">North Korean</option>
        <option value="northern irish">Northern Irish</option>
        <option value="norwegian">Norwegian</option>
        <option value="omani">Omani</option>
        <option value="pakistani">Pakistani</option>
        <option value="panamanian">Panamanian</option>
        <option value="papua new guinean">Papua New Guinean</option>
        <option value="rwandan">Rwandan</option>
        <option value="scottish">Scottish</option>
        <option value="serbian">Serbian</option>
        <option value="seychellois">Seychellois</option>
        <option value="sierra leonean">Sierra Leonean</option>
        <option value="singaporean">Singaporean</option>
        <option value="slovakian">Slovakian</option>
        <option value="slovenian">Slovenian</option>
        <option value="somali">Somali</option>
        <option value="south african">South African</option>
        <option value="south korean">South Korean</option>
        <option value="sri lankan">Sri Lankan</option>
        <option value="sudanese">Sudanese</option>
        <option value="swedish">Swedish</option>
        <option value="taiwanese">Taiwanese</option>
        <option value="uruguayan">Uruguayan</option>
        <option value="uzbekistani">Uzbekistani</option>
        <option value="venezuelan">Venezuelan</option>
        <option value="vietnamese">Vietnamese</option>
        <option value="welsh">Welsh</option>
      </select>
    </Fragment>
  );
};
export default DropDownList;
