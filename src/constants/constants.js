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
      folders: ['Perfil', 'Reseña', 'Add mascota'
    ]}] },
    { 
      name: "Razas", 
      icon: <i class="fas fa-dog"></i>, 
      subcategory: [{ 
        name: 'Añadir aviso', 
        folders: ['Lista', 'Reseña', 'Recomendaciones'] 
      }] },
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
    icon: <i class="fas fa-hand-holding-medical"></i>, 
    subcategory: [{ 
      name: 'Añadir aviso', 
      folders: ['Perfil', 'Reseña', 'Recomendaciones'] 
    }] },
  { 
    name: "Nutrición", 
    icon: <i class="fas fa-bone"></i>, 
    subcategory: [{ 
      name: 'Añadir aviso', 
      folders: ['Perfil', 'Reseña', 'Recomendaciones'] 
    }] },
  { 
    name: "Vacunas", 
    icon: <i class="fas fa-syringe"></i>, 
    subcategory: [{ 
      name: 'Añadir aviso', 
      folders: ['Perfil', 'Reseña', 'Recomendaciones'] 
    }] },
  { 
    name: "Desparasitación", 
    icon: <i class="fas fa-bug"></i>, 
    subcategory: [{ 
      name: 'Añadir aviso', 
      folders: ['Perfil', 'Reseña', 'Recomendaciones'] 
    }] },
  { 
    name: "Historial", 
    icon: <i class="fas fa-file-medical"></i>, 
    subcategory: [{ 
      name: 'Añadir aviso', 
      folders: ['Perfil', 'Reseña', 'Recomendaciones'] 
    }] }
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
