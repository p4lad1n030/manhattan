import { ReactNode, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../services';
import { useNavigate } from 'react-router-dom';

interface PrivateProps {
  children: ReactNode;
}

const Private = ({ children }: PrivateProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && user.uid === '9ZDHa32eMlWJuvYk7AGmWhmN5NM2') {
        navigate(`/admin`, { replace: true });
      } else {
        navigate('/', { replace: true });
      }
    });

    // Limpeza para evitar vazamento de memória
    return () => unsubscribe();
  }, [navigate]);

  return <>{children}</>;
}

export default Private;
