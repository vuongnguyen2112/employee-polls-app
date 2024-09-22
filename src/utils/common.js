import { ANSWER_OPTION } from '../constant';

export const checkIfAnswered = (question, authedUser) => {
  const optionOneVoters = question[ANSWER_OPTION.OPTION_ONE].votes;
  const optionTwoVoters = question[ANSWER_OPTION.OPTION_TWO].votes;
  
return optionOneVoters.includes(authedUser) || optionTwoVoters.includes(authedUser);
};
