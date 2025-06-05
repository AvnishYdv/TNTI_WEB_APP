import { Card, CardMedia, CardContent, Typography, Button, Chip, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  return (
    <Card sx={{ 
      width: '100%',
      maxWidth: 345,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      transition: 'transform 0.3s',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
      }
    }}>
      <Box sx={{ 
        position: 'relative',
        width: '100%',
        height: 200,
        overflow: 'hidden'
      }}>
        <CardMedia
          component="img"
          image={project.image}
          alt={project.title}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            transition: 'transform 0.5s',
            '&:hover': {
              transform: 'scale(1.05)'
            }
          }}
        />
      </Box>
      
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div" noWrap>
          {project.title}
        </Typography>
        <Typography 
          variant="body2" 
          color="text.secondary" 
          sx={{ 
            mb: 2,
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}
        >
          {project.description}
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
          {project.tags.slice(0, 3).map((tag, index) => (
            <Chip 
              key={index} 
              label={tag} 
              size="small" 
              sx={{ 
                fontSize: '0.7rem',
                borderRadius: 1
              }}
            />
          ))}
        </Box>
      </CardContent>
      <Box sx={{ p: 2 }}>
        <Button 
          variant="contained" 
          fullWidth
          onClick={() => navigate(`/portfolio/${project.id}`)}
          sx={{
            borderRadius: 2,
            py: 1,
            textTransform: 'none',
            fontWeight: 'bold'
          }}
        >
          View Case Study
        </Button>
      </Box>
    </Card>
  );
};

export default ProjectCard;