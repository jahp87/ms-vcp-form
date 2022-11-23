echo $CI_ENVIRONMENT_RUN
if [[ $(echo "$CI_ENVIRONMENT_RUN" | grep -E ^master) ]]
then
        ./envgonsul npm run start
elif [[ $(echo "$CI_ENVIRONMENT_RUN" | grep -E ^release\/.*) ]]
then
        ./envgonsul npm run start
elif [[ $(echo "$CI_ENVIRONMENT_RUN" | grep -E ^develop) ]]
then
        ./envgonsul npm start
else
        ./envgonsul npm start
fi
