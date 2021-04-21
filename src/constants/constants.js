import PetsIcon from "@material-ui/icons/Pets";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import TodayIcon from '@material-ui/icons/Today';
import FolderSpecialIcon from '@material-ui/icons/FolderSpecial';
import AndroidIcon from '@material-ui/icons/Android';
import BeenhereIcon from '@material-ui/icons/Beenhere';
import ColorizeIcon from '@material-ui/icons/Colorize';
import OutdoorGrillIcon from '@material-ui/icons/OutdoorGrill';

export const CATEGORIES = [
  { 
    name: "Mascotas", 
    icon: <PetsIcon />, 
    subcategory: [{
      name:'Añadir mascota', 
      folders: ['Perfil', 'Reseña', 'Recomendaciones'
    ]}] },
  { 
    name: "Agenda", 
    icon: <TodayIcon />, 
    subcategory: [{ 
      name: 'Añadir aviso', 
      folders: ['Perfil', 'Reseña', 'Recomendaciones'] 
    }] },
  { 
    name: "Plan de salud",
     icon: <LocalHospitalIcon />, 
     subcategory: [{ 
      name: 'Añadir aviso', 
      folders: ['Perfil', 'Reseña', 'Recomendaciones'] 
    }] },
  { 
    name: "Recomendaciones", 
    icon: <BeenhereIcon />, 
    subcategory: [{ 
      name: 'Añadir aviso', 
      folders: ['Perfil', 'Reseña', 'Recomendaciones'] 
    }] },
  { 
    name: "Nutrición", 
    icon: <OutdoorGrillIcon />, 
    subcategory: [{ 
      name: 'Añadir aviso', 
      folders: ['Perfil', 'Reseña', 'Recomendaciones'] 
    }] },
  { 
    name: "Vacunas", 
    icon: <ColorizeIcon />, 
    subcategory: [{ 
      name: 'Añadir aviso', 
      folders: ['Perfil', 'Reseña', 'Recomendaciones'] 
    }] },
  { 
    name: "Desparasitación", 
    icon: <AndroidIcon />, 
    subcategory: [{ 
      name: 'Añadir aviso', 
      folders: ['Perfil', 'Reseña', 'Recomendaciones'] 
    }] },
  { 
    name: "Historial", 
    icon: <FolderSpecialIcon />, 
    subcategory: [{ 
      name: 'Añadir aviso', 
      folders: ['Perfil', 'Reseña', 'Recomendaciones'] 
    }] },
];

export const DOGBREED = [
  'American english coonhound',
  'Poochon',
  'Labsky o huskador',
  'Cuvac eslovaco',
  'Shepsky',
  'Caniche gigante o poodle estándar',
  'Pastor leonés',
  'Barbet o perro de agua francés',
];
