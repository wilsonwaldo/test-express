module.exports = {
  apps : [{
    name   : "myapp",
    script: "bin/www",
    instances: 1,
    autorestart: false,
    watch: true,
    logs_date_format: "DD HH:mm Z",
    merge_logs: true,
    max_restarts: 20
  }]
}
