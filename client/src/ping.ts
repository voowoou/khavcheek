import { useQuery } from '@tanstack/react-query';

export const pingServer = () => {
  return useQuery({
    queryKey: ['/ping'],
    queryFn: () =>
      fetch('http://localhost:5000/api/ping').then((res) => res.json()),
  });
};
