@echo off
set var=
setlocal enabledelayedexpansion
for /f %%x in ('dir node_modules /b') do (
    if "%%x" neq ".bin" (
        set var=!var! %%x
    )
)
npm uninstall !var!