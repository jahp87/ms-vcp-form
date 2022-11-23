FROM gcr.io/gsc-gitlab-ce/cicd/secaas/base/node:16-latest

COPY . .
COPY docker/entrypoint.sh .
COPY envgonsul .
COPY dist/ .

# Run
#CMD [ "npm", "start" ]
CMD ["/bin/sh","entrypoint.sh"]