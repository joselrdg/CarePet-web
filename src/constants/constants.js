import PetsIcon from "@material-ui/icons/Pets";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import TodayIcon from '@material-ui/icons/Today';
import FolderSpecialIcon from '@material-ui/icons/FolderSpecial';
import AndroidIcon from '@material-ui/icons/Android';
import BeenhereIcon from '@material-ui/icons/Beenhere';
import ColorizeIcon from '@material-ui/icons/Colorize';
import OutdoorGrillIcon from '@material-ui/icons/OutdoorGrill';

export const CATEGORIES = [
  {name: "Mascotas", icon: <PetsIcon />, subcategory: ['Añadir mascota'],folders:['Perfil', 'Reseña', 'Recomendaciones']},
  {name:"Agenda", icon: <TodayIcon />, subcategory: ['Añadir aviso']},
  {name:"Plan de salud", icon: <LocalHospitalIcon />, subcategory: ['Añadir plan']},
  {name:"Recomendaciones", icon: <BeenhereIcon />, subcategory: ['Buscar']},
  {name:"Nutrición", icon: <OutdoorGrillIcon />, subcategory: ['Añadir alimentos']},
  {name:"Vacunas", icon: <ColorizeIcon />, subcategory: ['Añadir vacuna', ]},
  {name:"Desparasitación", icon: <AndroidIcon />, subcategory: ['Añadir desparasitación']},
  {name:"Historial", icon: <FolderSpecialIcon />, subcategory: ['Añadir al historial']},
];

export const ICONSCATEGORIES = [
  <PetsIcon />,
  <TodayIcon />,
  <LocalHospitalIcon />,
  <BeenhereIcon />,
  <OutdoorGrillIcon />,
  <ColorizeIcon />,
  <AndroidIcon />,
  <FolderSpecialIcon />,
];
