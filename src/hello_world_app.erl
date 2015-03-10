%% @private
-module(hello_world_app).
-behaviour(application).

%% API.
-export([start/2]).
-export([stop/1]).

%% API.

-spec start(_,_) -> {'ok',pid()}.
start(_Type, _Args) ->
    %% lager:set_loglevel(lager_console_backend, debug),
    %% lager:set_loglevel(lager_file_backend, "console.log", debug),
    lager:info("node: ~p", [node()]),
    lager:info("cookie: ~p", [erlang:get_cookie()]),

	Dispatch = cowboy_router:compile([{'_', [
                                             {"/", cowboy_static, {priv_file, hello_world, "index.html"}},
                                             {"/reactjs", cowboy_static, {priv_file, hello_world, "index-my-ass.html"}},
                                             {"/comments.json", cowboy_static, {priv_file, hello_world, "comments.json"}},
                                             %% {"/comments.json", comments_json, []},
                                             {"/static/[...]", cowboy_static, {priv_dir, hello_world, "", [{mimetypes, cow_mimetypes, all}]}},
                                             {"/asdf", toppage_handler, []},
                                             {"/websocket", ws_handler, []}
                                            ]}]),
	{ok, _} = cowboy:start_http(http, 100, [{port, 8080}], [{env, [{dispatch, Dispatch}]} ]),
	hello_world_sup:start_link().

-spec stop(_) -> 'ok'.
stop(_State) ->
	ok.
