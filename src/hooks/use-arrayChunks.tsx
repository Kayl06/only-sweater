import { useState, useEffect } from 'react';

type ArrayChunk<T> = T[];

function useArrayChunks<T>(arr: T[], n: number): ArrayChunk<T>[] {
  const [chunks, setChunks] = useState<ArrayChunk<T>[]>([]);

  useEffect(() => {
    const chunkSize = Math.ceil(arr.length / n);
    const result: ArrayChunk<T>[] = [];
    for (let i = 0; i < n; i++) {
      result.push(arr.slice(i * chunkSize, (i + 1) * chunkSize));
    }
    setChunks(result);
  }, []);
  
  return chunks;
}

export default useArrayChunks;
