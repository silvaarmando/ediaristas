import {
  useState,
  useMemo,
} from 'react';
import {
  UserShortInterface
} from 'data/@types/UserInterface';
import {
  ValidationService
} from 'data/services/ValidationService';
import {
  ApiService
} from 'data/services/ApiService';

export default function useIndex() {
  const [
    cep,
    setCep
  ] = useState(''),

  cepValid = useMemo(() => {
    return ValidationService.cep(cep);
  }, [cep]),

  [
    error,
    setError
  ] = useState(''),

  [
    rightSearch,
    setRightSearch
  ] = useState(false),
  
  [
    waiting,
    setWaiting
  ] = useState(false),
  
  [
    charwoman,
    setCharwoman
  ] = useState([] as UserShortInterface[]),
  
  [
    remainingDaily, setRemainingDaily
  ] = useState(0);

  async function professionalsSearch(cep: string) {
    setRightSearch(false);
    setWaiting(true);
    setError('');

    try { 
      const { 
        data
      } = await ApiService.get<{
          charwoman: UserShortInterface[];
          numbers_charwoman: number;
        }>(
          '/api/diaristas-cidade?cep=' + cep.replace(/\D/g, '')
        );
      setCharwoman(data.charwoman);
      setRemainingDaily(data.numbers_charwoman);
      setRightSearch(true);
      setWaiting(false);
    } catch (error) {
      setError('CEP não encontrado');
      setWaiting(false);
    }
  }

  return {
    cep,
    setCep,
    cepValid,
    professionalsSearch,
    error,
    charwoman,
    rightSearch,
    waiting,
    remainingDaily,
  };
};